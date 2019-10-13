'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      field: "user_id"
    }
  }, {});
  Channel.associate = function(models) {
    // associations can be defined here
  };
  return Channel;
};