'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const indexRoute = require('./routes/indexRoute');
const chatRoute = require('./routes/chatRoute');
const cadastrarRoute = require('./routes/cadastrarRoute');
const loginRoute = require('./routes/loginRoute');
const adminRoute = require('./routes/adminRoute');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "*")
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/chat', chatRoute);
app.use('/cadastrar', cadastrarRoute);
app.use('/login', loginRoute);
app.use('/admin', adminRoute);

module.exports = app;