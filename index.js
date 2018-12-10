'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const UserController =  require('./controllers/user.controller');
const MongoDBUrl = 'mongodb://localhost:27017/userapi';

const server = new Hapi.Server({
    port: 3002,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/users',
    handler: UserController.list
});

server.route({
    method: 'GET',
    path: '/users/{id}',
    handler: UserController.get
});
server.route({
    method: 'POST',
    path: '/users',
    handler: UserController.create
});

server.route({
    method: 'PUT',
    path: '/users/{id}',
    handler: UserController.update
});

server.route({
    method: 'DELETE',
    path: '/users/{id}',
    handler: UserController.remove
});

(async () => {
    try {
        await server.start();
        // Once started, connect to Mongo through Mongoose
        mongoose.connect(MongoDBUrl, {}).then(() => {
                console.log(`Connected to Mongo server`)},
            err => {
                console.log(err)
            });
        console.log(`Server running at: ${server.info.uri}`);
    }
    catch (err) {
        console.log(err)
    }
})
();