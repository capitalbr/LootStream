'use strict';
module.exports = (sequelize, DataTypes) => {
  const TagJoin = sequelize.define('TagJoin', {
    videoOrChannelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "video_or_channel_id"
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "tag_id"
    }
  }, {});
  TagJoin.associate = function(models) {
    // associations can be defined here
  };
  return TagJoin;
};