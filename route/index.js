'use strict'

const express = require('express');

const translateController = require('../controller/index.js');

const api = express.Router();

api.get('/translate/:string', translateController.getTranslate);

module.exports = api;