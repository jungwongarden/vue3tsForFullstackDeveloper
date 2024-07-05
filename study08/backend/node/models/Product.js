const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Product = db.define('product', {
  pno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cate: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  pname: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  pcontent: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  img1: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  img2: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  img3: {
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
  tableName: 'product' // 실제 데이터베이스 테이블 이름
});

module.exports = Product;