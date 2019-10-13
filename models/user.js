'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    profilePicUrl: {
      type: DataTypes.STRING,
      field: "profile_pic_url"
    },
    profileBannerUrl: { 
      type: DataTypes.STRING,
      field: "profile_banner_url"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    username: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    displayName: { 
      type: DataTypes.STRING,
      allowNull: false,
      field: "display_name"
    },
    bio: DataTypes.STRING,
    isOnline: {
      type: DataTypes.BOOLEAN,
      field: "is_online"
    },
    shareActivity: { 
      type: DataTypes.BOOLEAN,
      field: "shareActivity"
    },
    passwordDigest: {
      type: DataTypes.String,
      allowNull: false,
      field: "password_digest"
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};