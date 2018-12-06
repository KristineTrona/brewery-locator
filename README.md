# Brewery Locator

## Introduction

This is a simple full-stacl app , which allows a user to enter his/her location and find nearby breweries. The app is built with Typescript, Koa server, routing controllers, TypeORM and PostgreSQL in the backend and React with Redux in the frontend. The map functionality is built with Leaflet, React Leaflet and Leaflet-Geosearch libraries.

## Prerequisits

-  [Node](https://nodejs.org/en/)
-  [Docker](https://www.docker.com/)
- [Postico](https://eggerapps.at/postico/) or a different database management tool (for example [DBeaver](https://dbeaver.io/))
- [Yarn](https://yarnpkg.com/lang/en/) (optional - you can also use npm to install dependencies)

## Setting up

First clone this repository and open the code in your text editor. Then follow the steps to set up the server and the client:

### Server

1. Run postgres in a docker container ([see more](https://docs.docker.com/samples/library/postgres/#start-a-postgres-instance))

   Example:
   ```
   $ docker run -p 5432:5432 --name some-postgres -e POSTGRES_PASSWORD=secret -d postgres
   ```
   **If you decide to connect to a different port or use different password you will need to edit the connection url in /server/src/db.ts**
2. In your terminal go to the cloned repository and then to the server directory `/cd server`
3. Run `yarn install` to install the dependencies. 
4. Run `yarn start` to start the server - if everything went well in your terminal you should see:
```
Connected to Postgres with TypeORM
Listening on port 4000
```
5. Use your database management tool to insert data in your database. Go to /server/data.txt and copy and execute all INSERT INTO commands in your SQL Query one by one.   

### Client

1. In your terminal go to the cloned repository and then to the client directory `/cd client`
2. Run `yarn install` to install the dependencies. 
3. Run `yarn start` to start the client - the website should open on your localhost:3000

