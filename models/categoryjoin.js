'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryJoin = sequelize.define('CategoryJoin', {
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id"
    },
    videoOrChannelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      field: "video_or_channel_id"
    }
  }, {});
  CategoryJoin.associate = function(models) {
    // associations can be defined here
  };
  return CategoryJoin;
};