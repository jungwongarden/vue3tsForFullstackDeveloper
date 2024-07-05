// models/Board.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Board = sequelize.define('Board', {
  no: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  resdate: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  hits: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'board', // 실제 데이터베이스 테이블 이름
  timestamps: false // createdAt, updatedAt 필드 사용 안 함
});

module.exports = Board;