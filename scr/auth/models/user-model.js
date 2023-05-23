'use strict';

const { Sequelize, DataTypes } = require('sequelize');

// Create a Sequelize model
const UserModel = (sequelizeDatabase) => {
  return sequelizeDatabase.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

// Export the UserModel
module.exports = UserModel;
