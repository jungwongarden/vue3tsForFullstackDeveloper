const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Member = db.define('member', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  pw: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  birth: {
    type: DataTypes.DATE,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  tel: {
    type: DataTypes.STRING(20)
  },
  addr1: {
    type: DataTypes.STRING(255)
  },
  addr2: {
    type: DataTypes.STRING(255)
  },
  postcode: {
    type: DataTypes.STRING(10)
  }
}, {
  tableName: 'member' // 실제 데이터베이스 테이블 이름
});

module.exports = Member;