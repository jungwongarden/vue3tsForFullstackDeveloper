const jwt = require('jsonwebtoken');

// 비밀 키는 환경 변수에 저장하는 것이 좋습니다.
const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key';

// 토큰 생성 함수
const generateToken = (user) => {
  // 사용자 정보를 바탕으로 JWT 생성
  const payload = {
    id: user.id,
    username: user.username,
    // 필요한 사용자 정보를 추가할 수 있습니다.
  };

  // 토큰 생성
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

// 토큰 검증 미들웨어
const authenticateToken = (req, res, next) => {
  // Authorization 헤더에서 토큰을 가져옵니다.
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: '토큰이 없습니다.' });
  }

  // 토큰 검증
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: '유효하지 않은 토큰입니다.' });
    }
    
    // 사용자 정보를 요청 객체에 추가
    req.user = user;
    next();
  });
};

module.exports = {
  generateToken,
  authenticateToken,
};