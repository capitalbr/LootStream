'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    channelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "channel_id"
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id"
    }
  }, {});
  Subscription.associate = function(models) {
    // associations can be defined here
  };
  return Subscription;
};