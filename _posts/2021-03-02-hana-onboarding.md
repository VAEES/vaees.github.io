---
author: Lucas Medeiros Cardoso
layout: article
title: "Onboarding HANA"
date: 2021-03-02 21:06:00 -0300 
categories: HANA
thumb: sample.jpg
language: pt_br
---

Este tutorial tem como objetivo elencar quais passos você deve seguir para conseguir entender o básico do banco HANA.

## Sumário

1. Requisitos
2. Links úteis
3. Criando conta trial
4. Setup do ambiente de desenvolvimento
5. Videos

## 1. Requisitos

- Acesso a WebIDE trial
- Inglês técnico

## 2. Links úteis

No link a seguir você encontrará um guia detalhado sobre o banco HANA:

[SAP HANA docs](https://help.sap.com/viewer/6b94445c94ae495c83a19646e7c3fd56/2.0.03/en-US/330e5550b09d4f0f8b6cceb14a64cd22.html){:target="_blank"}

Abaixo também listamos alguns canais interessantes para serem seguidos:

[SAP Developers](https://www.youtube.com/channel/UCNfmelKDrvRmjYwSi9yvrMg){:target="_blank"}
[Thomas Jung](https://www.youtube.com/channel/UCVLSTvSR7UAd87o_0qoIR4Q){:target="_blank"}

## 3. Criando conta trial

Para realizar o setup do ambiente de desenvolvimento, você precisará ter uma conta trial no SAP Business Technology (BTP). Para isso, clique [aqui](https://developers.sap.com/tutorials/hcp-create-trial-account.html){:target="_blank"} e siga os passos.

## 4. Setup do ambiente de desenvolvimento

Após criar a conta trial, será necessário criar uma instancia do HANA Cloud no SAP BTP. Siga os passos desse [tutorial](https://saphanajourney.com/hana-cloud/learning-article/how-to-create-a-calculation-view-with-sap-web-ide/){:target="_blank"} até o passo "Create a user-provided service".

Depois de concluir a criação do "user-provided service" acesse sua instancia do hana cloud no BTP, clique em "actions" e selecione a opção "Open in SAP HANA Database Explorer". 

![HANA Cloud BTP](https://i.ibb.co/80rvGYX/2021-07-06-21h28-56.png)

Acesse o banco de dados com seu usuário "DBADMIN"

![Acessando DB](https://i.ibb.co/BwwdSrg/2021-07-06-21h31-37.png)

Abra um console SQL e execute o seguinte comando sql:

"CREATE SCHEMA <schema_name> OWNED BY DBADMIN;"

![Create schema](https://i.ibb.co/61RN9dy/2021-07-06-21h50-42.png)

Quando finalizar estes passos você pode prosseguir com o [tutorial](https://saphanajourney.com/hana-cloud/learning-article/how-to-create-a-calculation-view-with-sap-web-ide/#step-4){:target="_blank"}.

Atenção: O schema que você acabou de criar deverá ser colocado no arquivo .hdbgrants nos próximos passos do tutorial da SAP.

## 5. Passos a serem seguidos

1. Introdução
    1. [Aula introdutória sobre HANA DB](https://www.youtube.com/watch?v=ljdvqRtSHd4){:target="_blank"}
    2. [Ferramentas do HANA DB](https://www.youtube.com/watch?v=wojFKVxjFl4){:target="_blank"}
    3. [Camada de servidor da aplicação](https://www.youtube.com/watch?v=DtlOto-goUw){:target="_blank"}
    4. [Olá mundo!](https://www.youtube.com/watch?v=Ll4WI9wtzcQ){:target="_blank"}
    5. [Conteúdo do HANA DB](https://www.youtube.com/watch?v=N-fwm9F45NA){:target="_blank"}
2. Core Data Services (CDS)
    1. [Tabelas e Visões com CDS](https://www.youtube.com/watch?v=UuXURLt1IQE){:target="_blank"}
    2. [Carregando dados com Table Data](https://www.youtube.com/watch?v=K1mHlVvP7Io){:target="_blank"}
3. Roles e Privileges
    1. [Estruturação de privilégios](https://www.youtube.com/watch?v=p6IJwF7UgCY){:target="_blank"}
4. Arquitetura
    1. [Configurando container do HANA](https://www.youtube.com/watch?v=PrSSXbRnuCE){:target="_blank"} 
    2. [Configurando um container do HANA externo](https://www.youtube.com/watch?v=ViDcNj3i8Gg){:target="_blank"}
5. Calculation View (CV)
    1. [CV de dimensão](https://www.youtube.com/watch?v=9MsviYMw5yA){:target="_blank"}
    2. [CV de cubo](https://www.youtube.com/watch?v=YiJcMI23JXo){:target="_blank"}
    3. [CV com table function](https://www.youtube.com/watch?v=VhLyBeC3ILs){:target="_blank"}
6. Stored Procedure
    1. [Procedure](https://www.youtube.com/watch?v=dmGa1za864k){:target="_blank"}
7. XSODATA
    1. [Introdução](https://www.youtube.com/watch?v=0md3wyOQ59g){:target="_blank"}
    2. [OData v2 com múltiplas entidades](https://www.youtube.com/watch?v=MWxNLLYTeaI){:target="_blank"}
    3. [OData v2 com Exits](https://www.youtube.com/watch?v=jdTPoh6VVG4){:target="_blank"}
    4. [OData v4](https://www.youtube.com/watch?v=JYxL7MrFAGM){:target="_blank"}

## 4. Passos sugeridos

1. Debugging
    1. [Debugging no Hana](https://www.youtube.com/watch?v=iCZWk4lGusk){:target="_blank"}
    2. [Debugging no OData](https://www.youtube.com/watch?v=3xjQObWgXfI){:target="_blank"}
2. Outros
    1. [Playlist completa](https://www.youtube.com/watch?v=ljdvqRtSHd4&list=PL6RpkC85SLQAPHYG1x6IEu_exE5pa0UK_&index=1){:target="_blank"}