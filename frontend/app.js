const Sequelize = require('sequelize');


// const Sequelize = require('sequelize');

const sequelize = new Sequelize('glitch', 'bradleybarnes', null, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});

module.exports.sequelize = sequelize;

const { Users, userSync } = require('../models/users')

sequelize.authenticate().then(() => {
  console.log("Success!");
  userSync()
}).catch((err) => {
  console.log(err);
});

