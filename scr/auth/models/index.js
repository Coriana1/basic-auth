'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const users = require('./user-model');

// Determine the database 
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

// Create a new Sequelize 
const sequelizeDatabase = new Sequelize(DATABASE_URL);

const userModel = users(sequelizeDatabase, DataTypes);

module.exports = { sequelizeDatabase, userModel };
