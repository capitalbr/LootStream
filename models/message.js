'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    ownerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "owner_id"
    },
    friendId: {
      type: Sequelize.INTEGER,
      field: "friend_id"
    },
    channelId: {
      type: Sequelize.INTEGER,
      field: "channel_id"
    }
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};