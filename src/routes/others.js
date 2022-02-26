const express = require('express');
const route = express.Router();
const othersController = require('../app/controllers/OthersController');

route.use('/search', othersController.search);
route.use('/', othersController.index);

module.exports = route;
