'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profilePicUrl: {
        type: Sequelize.STRING,
        field: "profile_pic_url"
      },
      profileBannerUrl: {
        type: Sequelize.STRING,
        field: "profile_banner_url"
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      displayName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "display_name"
      },
      bio: {
        type: Sequelize.STRING
      },
      isOnline: {
        type: Sequelize.BOOLEAN,
        field: "is_online"
      },
      shareActivity: {
        type: Sequelize.BOOLEAN,
        field: "share_activity"
      },
      passwordDigest: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "password_digest"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at"
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at"
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};