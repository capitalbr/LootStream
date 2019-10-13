'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TagJoins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      videoOrChannelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "video_or_channel_id"
      },
      tagId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "tag_id"
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
    return queryInterface.dropTable('TagJoins');
  }
};