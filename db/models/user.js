'use strict';
var Sequelize = require('sequelize')
var db = require('../index')


module.exports = db.define('user', {
  name: Sequelize.STRING,
})
