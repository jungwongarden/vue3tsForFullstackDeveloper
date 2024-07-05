const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('company', 'root', '1234', {
  host: 'localhost',
  dialect: 'mariadb',
  port: 3307, // MariaDB 포트번호
  define: {
    timestamps: false // 자동 생성되는 createdAt, updatedAt 필드 비활성화
  },
  logging: msg => console.log(msg) // SQL 쿼리 로깅을 console.log로 설정
});

// 데이터베이스 연결 테스트
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;