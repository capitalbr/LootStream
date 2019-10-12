const { sequelize } = require("../frontend/app");
const Sequelize = require('sequelize');

const Users = sequelize.define('users', {
  title: {
    type: Sequelize.STRING
  }
})

module.exports.Users = Users;

module.exports.userSync = () => {
  Users.sync({ force: true }).then(function () {
    return Users.create({
      Username: 'Getting Started with PostgreSQL and Sequelize'
    });
  });
}




