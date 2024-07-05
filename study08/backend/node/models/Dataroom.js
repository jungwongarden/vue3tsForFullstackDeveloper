const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Dataroom = db.define('dataroom', {
  dno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  author: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  datafile: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  resdate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  hits: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'dataroom' // 실제 데이터베이스 테이블 이름
});

module.exports = Dataroom;