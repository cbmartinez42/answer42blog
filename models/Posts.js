const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // guest_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // has_nuts: {
    //   type: DataTypes.BOOLEAN,
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);

module.exports = Posts;