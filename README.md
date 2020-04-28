# nodejs-api
It's a simple NodeJS API builded to follow the [Rockeseat Starter](https://rocketseat.com.br/starter) NodeJS course. This API uses MongoDB as database storage.

> **OBS.: This API was builded on Arch Linux system.**

## Requirements
- [Node](https://nodejs.dev)
- [Yarn](https://yarnpkg.com)
- [Docker](https://www.docker.com)

## Packages
- [Express.js](https://expressjs.com)
- [Cors](https://github.com/expressjs/cors)
- [Mongoose](https://mongoosejs.com)
- [Mongoose Paginate](https://github.com/edwardhotchkiss/mongoose-paginate#readme)
- [Nodemon](https://nodemon.io) - *development dependency*

## Getting Started
### Install MongoDB via Docker
- Assuming you alread had Docker installed and configured as well:
```bash
# download MongoDB from Docker Hub
docker pull mongo
```
- Start up a database:
```bash
docker run -p 27017:27017 -d mongo
```
### Install packages with Yarn
```bash
yarn install
```
### Starting up the server
```bash
yarn dev
```
Will be running on `3001` localhost port.

## Testing the API
I've been used [HTTPie](https://httpie.org) to test this application.

### GET method
```bash
# return all records
http get :3001/api/products

# return a especific record by id
http get :3001/api/products/mongodb_id_hash
```

### POST method
```bash
http post :3001/api/products <<<'{"title":"Product Title","description":"A sample description","url":"https://example.com"}'
```

### PUT method
```bash
http put :3001/api/products/5ea81386864664beec2226ba <<<'{"title":"Change Title"}'
```

### DELETE method
```bash
http delete :3001/api/products/5ea81386864664beec2226ba
```

## Todo
- [ ] Unit Tests
- [ ] Integration Tests
