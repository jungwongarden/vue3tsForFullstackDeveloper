const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const QNA = db.define('qna', {
  qno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  lev: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  parno: {
    type: DataTypes.INTEGER,
    allowNull: true
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
  resdate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  hits: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'qna', // 실제 데이터베이스 테이블 이름
});

module.exports = QNA;