'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Videos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      channelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "channel_id"
      },
      views: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      goLiveNotification: {
        type: Sequelize.STRING,
        field: "go_live_notification",
        defaultValue: "I'm Live!"
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isLive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: "is_live"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Videos');
  }
};