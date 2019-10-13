'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id"
    },
    channelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "channel_id"
    }
  }, {});
  Follower.associate = function(models) {
    // associations can be defined here
  };
  return Follower;
};