'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    channelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "channel_id"
    },
    views: {
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    goLiveNotification: {
      type: DataTypes.STRING,
      field: "go_live_notification",
      defaultValue: "I'm Live!"
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isLive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: "is_live"
    }
  }, {});
  Video.associate = function(models) {
    // associations can be defined here
  };
  return Video;
};