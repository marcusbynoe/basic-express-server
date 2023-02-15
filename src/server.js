'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(logger);

app.get('/', (req, res) => {

  const message = `What a fine day for development`;

  res.status(200).send(message);
});




app.get('/person', validator, (req, res) => {

  console.log('time is:', req.time);
  if(!req.query.personName){
    next();
    return;
  }

  const message = `Hello ${req.query.personName}!`;
  const output = { message }

  res.status(200).json(output);
});

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`))
}

app.use('*', notFound);
app.use(errorHandler);

module.exports = { start, app }