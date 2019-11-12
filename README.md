# [koa-ts-full-template](https://github.com/SimpleCodeCX/koa-ts-full-template)
This is a full project structure, integrated with ts. This project has been configured with a mysql database, support different environment(local,dev,prod) configuration, some custom koa middleware have configured, and it has been the definition of a unified api response format.

## Features

✓ [koa v2](https://github.com/koajs/koa)

✓ [Typescript](https://github.com/koajs/koa)

✓ [Jest](https://github.com/facebook/jest)

✓ [APIDOC](https://apidocjs.com/)

✓ [Docker](https://www.docker.com/)

✓ [Eslint](https://github.com/eslint/eslint)

✓ [Husky](https://github.com/typicode/husky)

## Installation CLI

```javascript
 npm i -g koa-ts-cli
```

## Create Project

```javascript
 koats create myProject
 # Choose koa-ts-full-template option.
 
 cd myProject
 npm install

```

## In development mode

> NOTE: You need to configure the environment variables such as your mysql db password when you run project.
>
> Please see myProject/src/app/config/variate.ts. This file contains the whole of the input variables of the project.
>
> For convenience, I have created the shell script for you: myProject/shell/start-local.cmd

```javascript
 cd myProject/shell
 ./start-local.cmd
```

## In porduction mode

```javascript
 cd myProject
 npm run build

 cd myProject/dist
 npm install
 npm run prod #  You need to configure the environment variables such as your mysql db password.
```

## Run in docker

```javascript
 cd myProject
 npm install
 npm run build
 sudo docker build -t koa-ts-api-server .
 sudo docker run -it --name koa-ts-api-server -p 8080:8080 -e MARIADBPWD=xxxxxx koa-ts-api-server # MARIADBPWD is mysql db password
```

or 

```javascript
 cd myProject
 ./docker-build.sh
 sudo docker run -it --name koa-ts-api-server -p 8080:8080 -e MARIADBPWD=xxxxxx koa-ts-api-server # MARIADBPWD is mysql db password
```

## Test

```javascript
 cd myProject/shell
 ./test.cmd
```

## Generate Apidoc

```javascript
 cd myProject/src/app/apidoc
 generate-apidoc.cmd  # The api doc is generated in myProject/src/app/apidoc/dist
```
