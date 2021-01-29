---
author: Denys Gaspar
layout: article
title: "SAP ECC Transporte Request"
date: 2021-01-28 22:08:00 -0300 
categories: sap ecc
thumb: sample.jpg
language: pt_br
---

Este manual tem como objetivo a demonstração prática de como realizar o transporte de Request ou Task no ECC.

## Sumário

1. Requisitos
2. Transporte de Request ou Task no ECC

## 1. Requisitos

- Acesso ao SAP;
- Acesso a transação SE09.

## 2. Transporte de Request ou Task no ECC


Acesse a transação SE09.

- Filtre utilizando o campo USER;
- Customizing Request para acessar visualizar suas Requests;
- Modificable para visualizar as Requests que possam ser modificadas;
- Por último “Display” para realizar a busca.

img2

A linha “ED1K9A4UTQ 510 C0504803 S 5200002932: Catalog TVARV configuration” é a nossa Request no ECC e a linha “Customizing Task” é a nossa TASK.
Para realizar o transporte selecione sobre o objeto que deseja transportar e aperte no botão “Transport” no cabeçalho da janela.

**Para clientes que utilizam o Solution Manager não é necessário que transportes a Request, apenas transporte a Task e o operador do cliente utiliza o Solution Manager para o transporte da Request.**