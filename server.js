const Sequelize = require('sequelize');

const sequelize = new Sequelize('glitch', 'bradleybarnes', null, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});