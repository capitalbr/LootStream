'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
  };
  return Tag;
};