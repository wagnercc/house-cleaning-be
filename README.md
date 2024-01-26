# House Cleaning BE

**House Cleaning BE** é uma API que oferece funcionalidades para consultar clientes, adicionar novos clientes e encontrar a rota mais eficiente entre todos os clientes cadastrados. Essa rota tem como ponto de partida as coordenadas (0,0), que representam a localização da empresa.

## Tecnologias Utilizadas

- Node.js (v20.10.0)
- Express
- Cors
- Dotenv
- pg (PostgreSQL)
- pg-promise

## Dependências de Desenvolvimento

- Nodemon

## Instruções para Execução do Projeto

1. Baixe o projeto para a sua máquina.
2. Certifique-se de estar utilizando a versão 20.10.0 do Node.js.
3. Execute o comando `npm install`.
4. Renomeie o arquivo `setenv` para `.env` e insira os dados da sua base de dados local.
5. Inicie o projeto com o comando `npm run start`.

## Rotas

### 1. Consultar Todos os Clientes (GET)

Endpoint: `/customers`

### 2. Adicionar Novo Cliente (POST)

Endpoint: `/customers`

### 3. Consultar Clientes Próximos (GET)

Endpoint: `/nearest-customers`

## Algoritmo Utilizado

O projeto utiliza o algoritmo do Problema do Caixeiro Viajante para calcular a rota mais eficiente entre os clientes cadastrados.

Este projeto oferece uma solução robusta para otimizar a gestão de clientes, fornecendo uma API intuitiva e eficiente para operações com o banco de dados. Siga as instruções fornecidas para configurar e executar a aplicação em sua máquina local.
