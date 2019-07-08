# GraphQL Typescript Server Boilerplate Tutorial by Ben Awad

## Setting up a TypeORM Project - Part 0

* Project created from scratch

* Create docker-compose to launch postgres & redis servers

* Quick Start typeorm - `npx typeorm --name graphql-ts-server-boilerplate --database postgres`

* Update dependencies first evaluating them with npm-check-updates
To update package.json use -u parameter

```bash
npm install -g npm-check-updates
ncu -u
yarn install
```

* Setup ormconfig.json to be able to conect to postgres database

```bash
  "username": "postgres",
  "password": "",
  "database": "graphql-ts-server-boilerplate",  
```

* Update tsconfig.json file

* Install tslint - `yarn add -D tslint tslint-config-prettier`
  Update tslint.json file

* Install Graphql Yoga - `yarn add graphql-yoga`

* Remove everything in index.ts && copy quick start from graphql-yoga to launch a quick graphql server

* Install ts-node-dev - `yarn add -D ts-node-dev` ( better than nodemon because it's more efficient - `yarn add -D nodemon` )
  * `tsnd --respawn --transpileOnly src/index.ts`
