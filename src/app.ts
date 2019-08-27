/*import express from 'express';
import mysql from 'mysql';
import morgan from 'morgan';
import bodyParser from 'bodyParser';*/

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

import employee from './controllers/employee';
import employees from './controllers/employees';

const app = express();


const controllers = {
    employee: employee,
    employees: employees
};

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(function (request: any, response: any, next: any) {
    console.log('Request Type:', request.method);
    next();
})
    .get('/employees/:id', function(request: any, response: any) {
        return controllers.employee('get', request, response);
    })
    .post('/employees/:id', function(request: any, response: any) {
        return controllers.employee('post', request, response);
    });

app.use(function (request: any, response: any, next: any) {
    console.log('Request Type:', request.method);
    next();
})
    .get('/employees', function(request: any, response: any) {
        return controllers.employees('get', request, response);
    })
    .post('/employees', function(request: any, response: any) {
        return controllers.employees('post', request, response);
    });

app.listen(3000, () =>  console.log('Server has been started...'));

