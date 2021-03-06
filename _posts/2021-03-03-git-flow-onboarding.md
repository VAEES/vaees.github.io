---
author: Gustavo Fonseca Simil
layout: article
title: "Onboarding Git and Git-Flow"
date: 2021-03-03 22:42:00 -0300 
categories: Git
thumb: sample.jpg
language: pt_br
---

Esse tutorial possui dois objetivos. O primeiro é lhe indicar um excelente conteúdo para que conheça o git e suas principais funcionalidades. O segundo é lhe apresentar os principais comandos do Git-Flow e como eles são usados no dia-a-dia da VAEES.

## Sumário

1. Git
2. O que é o Git Flow e por que usamos?
3. Setup de um repositório para utilizar Git flow
4. Principais comandos usados na VAEES
5. Referências

## 1. Git
Git é a ferramenta de controle de versão mais utilizada globalmente. Há uma vasta documentação sobre o git na internet e separamos aqui um vídeo que explica em bom nível as suas principais funcionalidades. Divirta-se :)
- [Git by Fabio Akita](https://www.youtube.com/watch?v=crk9cfCsgtE)

## 2. O que é o Git Flow e por que usamos

Git Flow é um conjunto de extensões do Git, que definem um workflow para suportar o processo de Continuous Delivery, que é um cenário comum na VAEES. Aqui temos entregas contínuas em ambiente produtivo, enquanto parte do time está trabalhando em funcionalidades planejadas para as próximas sprints. Isso traz algumas dificuldades que são resolvidas pelo Git Flow:

- Gerenciamento de funcionalidades desenvolvidas paralelamente
- Resolução de bugs na versão produtiva sem retrabalho para o time que está desenvolvendo as novas funcionalidades
- Controle das versões das aplicações através de tags

## 3. Setup de um repositório para utilizar Git Flow

Antes de utilizar o Git Flow, você deve garantir que o repositório está configurado corretamente no Github através das seguintes configurações:

- O arquivo git-flow.yml existe na pasta <<seu projeto>>/.github/workflows com o seguinte conteúdo:

{% highlight text %}
name: Gitflow CI

on: 
  pull_request:
    types: [closed]
    branches: [master, development]

jobs:
  build:
    runs-on: ubuntu-latest
    name: GitFlow CI
    steps:
      - uses: actions/checkout@v2
      - name: Run git flow process
        uses: VAEES/git-flow-action@main
        with:
          github_token: ${{ secrets.ADMIN_TOKEN }}
          master_branch: 'master'
          development_branch: 'development'
{% endhighlight %}
**Atenção**: Atentar para o nome da branch principal (main ou master) nas propriedades "branches" ou "master_branch".

- Ir em Settings e verificar no menu "Branches", que as opções abaixo estão marcadas:

1. Branch pattern name: [md][ae][sv]* ou [md][ae][iv]*
2. Require pull request reviews before merging: selecionado
3. Require review from Code Owners: selecionado
4. Include administrators: selecionado 

- Ir em Settings e verificar no menu "Secrets", que o ADMIN_TOKEN foi cadastrado. Caso não tenha sido, procure o líder técnico do seu projeto.

- Instalar o Git Flow em sua máquina. Veja a seção referências para entender como realizar a instalação em seu sistema operacional.

## 4. Principais comandos usados na VAEES

### 4.1. git flow init

É o primeiro comando que deve ser **sempre** executado. Devem ser aceitas todas as configurações default propostas durante a inicialização do Git Flow, com as seguintes exceções:

1. Branch name for "next release" development: renomear para **development**
2. Version tag prefix: renomear para **v**

### 4.2. git flow feature start

```bash
git flow feature start <nome-da-funcionalidade>
```

É o comando para iniciar uma nova funcionalidade. O git flow irá criar uma nova branch local a partir da branch development.

### 4.3. git flow feature publish

```bash
git flow feature publish <nome-da-funcionalidade>
```

É o comando para publicar a nova funcionalidade no repositório remoto. Assim outros desenvolvedores poderão baixar a branch e também trabalhar na funcionalidade.

### 4.4. git flow feature track

```bash
git flow feature track <nome-da-funcionalidade>
```

É o comando para baixar uma funcionalidade para o seu repositório local. O git flow irá criar uma branch local com referência à branch remota e você poderá iniciar o seu desenvolvimento.

### 4.5. git flow bugfix start

```bash
git flow bugfix start <nome-do-bug-que-será-ajustado>
```

O comando bugfix deve ser usado para resolver problemas identificados em funcionalidades que ainda não foram disponibilizadas em ambiente produtivo. Use o comando start para iniciar uma nova correção. O git flow irá criar uma nova branch local a partir da branch development.

### 4.6. git flow bugfix publish

```bash
git flow bugfix publish <nome-do-bug-que-será-ajustado>
```

É o comando para publicar a correção no repositório remoto. Assim outros desenvolvedores poderão baixar a branch e também trabalhar na correção.

### 4.7. git flow bugfix track

```bash
git flow bugfix track <nome-do-bug-que-será-ajustado>
```

É o comando para baixar uma correção para o seu repositório local. O git flow irá criar uma branch local com referência à branch remota e você poderá iniciar o seu desenvolvimento.

### 4.8. git flow hotfix start

```bash
git flow hotfix start <nome-do-hotfix-que-será-ajustado>
```

O comando hotfix deve ser usado para resolver problemas identificados na trilha produtiva. Em geral são correções críticas que estão impactando a utilização da aplicação pelos usuários. Use o comando start para iniciar uma nova correção. O git flow irá criar uma nova branch local a partir da branch development.

Quando um hotfix é finalizado, o Git Flow realiza a sua fusão tanto na branch main/master quanto na branch development, garantindo que as novas funcionalidades sejam desenvolvidas em cima de uma versão mais estável.

### 4.9. git flow hotfix publish

```bash
git flow hotfix publish <nome-do-hotfix-que-será-ajustado>
```

É o comando para publicar a correção no repositório remoto. Assim outros desenvolvedores poderão baixar a branch e também trabalhar na correção.

### 4.10. git flow hotfix track

```bash
git flow hotfix track <nome-do-hotfix-que-será-ajustado>
```

É o comando para baixar uma correção para o seu repositório local. O git flow irá criar uma branch local com referência à branch remota e você poderá iniciar o seu desenvolvimento.

### 4.11. git flow release start

```bash
git flow release start <numero-da-release>
```

É o comando para criação de uma nova release da sua aplicação. As releases na VAEES são numéricas e respeitam a formatação semântica MAJOR.MINOR.PATCH (X.X.X):
1. MAJOR: mudanças significativas na aplicação que impactam o usuário ou as integrações sistêmicas
2. MINOR: mudanças importantes como inclusão de novas funcionalidades
3. PATCH: mudanças normalmente associadas à bug fix

A release é criada com referência à branch development. Quando a release é finalizada, o Git Flow realiza a sua fusão tanto na branch development quanto na main/master, equalizando assim as duas branches.

### 4.12. Pull Request

Na VAEES não utilizamos o comando git flow <feature/bugfix/release/hotfix> finish. Quando uma Pull Request é aprovada pelo revisor do código, é disparado um workflow no próprio Github que executa automaticamente o comando finish. O mesmo workflow garante também que a criação das tags e publicação da mesma no repositório remoto.

## 5. Referências

- [Git by Fabio Akita](https://www.youtube.com/watch?v=crk9cfCsgtE)
- [Git Flow by Daniel Kummer](https://danielkummer.github.io/git-flow-cheatsheet/)
- [Semantic Versioning](https://semver.org/)

