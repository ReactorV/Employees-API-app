/*import express from 'express';
import mysql from 'mysql';
import morgan from 'morgan';*/

const express = require('express');
const morgan = require('morgan');

import employee from './controllers/employee';
import employees from './controllers/employees';

const app = express();

const controllers = {
  employee: employee,
  employees: employees
};

app.use(morgan('combined'));

app.use(function (request, response, next) {
  console.log('Request Type:', request.method);
  next();
    })
    .get('/employees/:id', function(request, response) {
        return controllers.employee('get', request, response);
    })
    .post('/employees/:id', function(request, response) {
      return controllers.employee('post', request, response);
    });

app.use(function (request, response, next) {
  console.log('Request Type:', request.method);
  next();
    })
    .get('/employees', function(request, response) {
      return controllers.employees('get', request, response);
    })
    .post('/employees', function(request, response) {
      return controllers.employees('post', request, response);
    });

app.listen(3000, () =>  console.log('Server has been started...'));

