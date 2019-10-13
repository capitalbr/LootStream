'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    user1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_1"
    },
    user2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_2"
    },
  }, {});
  Friend.associate = function(models) {
    // associations can be defined here
  };
  return Friend;
};