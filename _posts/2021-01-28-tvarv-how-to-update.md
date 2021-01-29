---
author: Denys Gaspar
layout: article
title: "SAP ECC Atualizações em TVARVs"
date: 2021-01-28 22:08:00 -0300 
categories: sap ecc
thumb: sample.jpg
language: pt_br
---

Este manual tem como objetivo a demonstração prática de como realizar a atualização em uma TVARV e seu vínculo com a Request responsável pelo transporte para um ambiente produtivo.

## Sumário

1.	Requisitos
2.	Alteração de TVARV Single Parameter
3.	Alteração de TVARV Selection Options
4.	Vínculo da TVARV a Request

## 1. Requisitos

- Acesso ao SAP
- Acesso a transação STVARV

## 2. Alteração em TVARV Single Parameters

Acesse a transação STVARV e clique no botão de “Display <-> Change”

Como neste documento temos a intenção de transportar as alterações em uma Request marque o check box “Include changed entries in transport request” – como na imagem a seguir.

img2

Após marcar o check box selecione a entrada que deseja atualizar e clique no botão “Change” ou pressione F9.

O campo será habilitado para alterações. Após a alteração lembre-se de salvar a transação pressionando o botão “Save” ou “Ctrl + S”. Na seção 3 veja como realizar o vínculo com a Request.

## 3. Alteração de TVARV Selection Options

Para atualizações em TVARVs multivaloradas se faz necessário acessar a Aba Selection Options.
Selecione a TVARV desejada, clique sobre o botão de edição, após isso acesse a janela de Seleção Múltipla na coluna “Multiple Selection”.

img3

img4

## 4. Vínculo da TVARV a Request

Para vincular a alteração realizada à uma Request basta apenas selecionar qual a Request desejada após salvar a transação.
Para encontrar a Request com mais agilidade, pressione o botão “Own Requests” e selecione a request.

img5