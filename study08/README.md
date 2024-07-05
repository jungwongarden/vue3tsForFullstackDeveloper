# 8. Vue 3 Company Web Application

## 8-1. Back-end MariaDB 데이터베이스 준비

### 8-1-1. 데이터베이스 테이블 생성

```sql
USE company

-- board 테이블 생성
CREATE TABLE board (
    no INT AUTO_INCREMENT PRIMARY KEY,      -- 글번호, 자동 증가
    title VARCHAR(255) NOT NULL,            -- 글제목
    content TEXT NOT NULL,                  -- 글내용
    author VARCHAR(100) NOT NULL,           -- 작성자
    resdate DATETIME DEFAULT CURRENT_TIMESTAMP,  -- 작성일, 기본값 현재 날짜/시간
    hits INT DEFAULT 0                      -- 조회수, 기본값 0
);

-- member 테이블 생성
CREATE TABLE member (
    id VARCHAR(50) PRIMARY KEY,             -- 아이디
    pw VARCHAR(255) NOT NULL,               -- 비밀번호
    name VARCHAR(100) NOT NULL,             -- 회원명
    birth DATE NOT NULL,                    -- 생년월일
    email VARCHAR(255) NOT NULL,            -- 이메일
    tel VARCHAR(20),                        -- 연락처
    addr1 VARCHAR(255),                     -- 기본 주소
    addr2 VARCHAR(255),                     -- 상세 주소
    postcode VARCHAR(10),                   -- 우편번호
    regdate DATETIME DEFAULT CURRENT_TIMESTAMP  -- 가입일, 기본값 현재 날짜/시간
);


CREATE TABLE qna (
    qno INT AUTO_INCREMENT PRIMARY KEY,
    lev INT DEFAULT 0,
    parno INT,
    title VARCHAR(255),
    content TEXT,
    author VARCHAR(255),
    resdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    hits INT DEFAULT 0
);


CREATE TABLE dataroom (
    dno INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    author VARCHAR(255),
    datafile VARCHAR(255),
    resdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    hits INT DEFAULT 0
);


CREATE TABLE product (
    pno INT AUTO_INCREMENT PRIMARY KEY,
    cate VARCHAR(255),
    pname VARCHAR(255),
    pcontent TEXT,
    img1 VARCHAR(255),
    img2 VARCHAR(255),
    img3 VARCHAR(255),
    resdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    hits INT DEFAULT 0
);
```

### 8-1-2. 더미 데이터 추가



<br><br><br>

## 8-2. Vue 3 + Tailwind + Node + Express + MariaDB 프로젝트

### 8-2-1. Back-End 

- 각 기능에 대한 CRUD 작업과 RESTful API 디자인을 포함하고 있습니다. 
- 데이터베이스 연동은 Sequelize ORM을 사용하여 구현하였습니다. 
- 세션 관리와 비밀번호 암호화도 추가되어 있습니다.

<br>

```shell
D:\gitRepository\sunglee0517\vuejs\study07\backend>md node

D:\gitRepository\sunglee0517\vuejs\study07\backend>cd node

D:\gitRepository\sunglee0517\vuejs\study07\backend\node>npm init -y
Wrote to D:\gitRepository\sunglee0517\vuejs\study07\backend\node\package.json:

{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}



D:\gitRepository\sunglee0517\vuejs\study07\backend\node>npm install express

added 64 packages, and audited 65 packages in 3s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

D:\gitRepository\sunglee0517\vuejs\study07\backend\node>npm install jsonwebtoken --save-dev
npm WARN idealTree Removing dependencies.jsonwebtoken in favor of devDependencies.jsonwebtoken

up to date, audited 79 packages in 579ms

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

D:\gitRepository\sunglee0517\vuejs\study07\backend\node>npm install express-session --save-dev

added 5 packages, and audited 84 packages in 1s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

D:\gitRepository\sunglee0517\vuejs\study07\backend\node>npm install sequelize --save-dev

added 20 packages, and audited 104 packages in 2s

13 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

D:\gitRepository\sunglee0517\vuejs\study07\backend\node>npm install mariadb --save-dev

added 5 packages, and audited 109 packages in 1s

13 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

D:\gitRepository\sunglee0517\vuejs\study07\backend\node>npm install bcrypt --save-dev
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm WARN deprecated npmlog@5.0.1: This package is no longer supported.
npm WARN deprecated are-we-there-yet@2.0.0: This package is no longer supported.
npm WARN deprecated gauge@3.0.2: This package is no longer supported.

added 58 packages, and audited 167 packages in 7s

16 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

D:\gitRepository\sunglee0517\vuejs\study07\backend\node>npm install multer --save-dev

added 16 packages, and audited 183 packages in 2s

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

<br>

#### 8-2-1-1. 프로젝트 구조

```lua
node/
├── app.js                // Express 애플리케이션 진입점
├── database.js                // 데이터베이스 연결
├── controllers/
│   ├── memberController.js   // 회원 관련 컨트롤러
│   ├── boardController.js    // 게시판 관련 컨트롤러
│   ├── qnaController.js      // QNA 관련 컨트롤러
│   ├── dataroomController.js // 자료실 관련 컨트롤러
│   └── productController.js  // 제품 관련 컨트롤러
├── models/
│   ├── Member.js         // 회원 모델
│   ├── Board.js          // 게시판 모델
│   ├── QNA.js            // QNA 모델
│   ├── Dataroom.js       // 자료실 모델
│   └── Product.js        // 제품 모델
├── routes/
│   ├── memberRoutes.js   // 회원 관련 라우팅
│   ├── boardRoutes.js    // 게시판 관련 라우팅
│   ├── qnaRoutes.js      // QNA 관련 라우팅
│   ├── dataroomRoutes.js // 자료실 관련 라우팅
│   └── productRoutes.js  // 제품 관련 라우팅
└── utils/
    ├── auth.js           // 인증 관련 유틸리티 (세션, 인증 검사)
    ├── bcrypt.js         // 비밀번호 암호화 유틸리티
    └── database.js                // 데이터베이스 연결
```

<br>

#### 8-2-1-2. 백엔드 애플리케이션 설정

**app.js (Express 애플리케이션 진입점)**

```javascript
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const memberRoutes = require('./routes/memberRoutes');
const boardRoutes = require('./routes/boardRoutes');
const qnaRoutes = require('./routes/qnaRoutes');
const dataroomRoutes = require('./routes/dataroomRoutes');
const productRoutes = require('./routes/productRoutes');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));
app.use(express.json()); // JSON 파싱 미들웨어

// Routes
app.use('/member', memberRoutes);
app.use('/board', boardRoutes);
app.use('/qna', qnaRoutes);
app.use('/dataroom', dataroomRoutes);
app.use('/product', productRoutes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

<br>

**database.js (데이터베이스 연결 설정)**

```javascript
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
```

- db.js: Sequelize를 사용하여 MariaDB 데이터베이스에 연결하는 설정입니다. 
- company 데이터베이스에 접속하며, 호스트는 localhost이고 포트는 3308로 설정하였습니다. 
- define 객체 내부의 timestamps: false 설정으로 Sequelize 모델에서 자동 생성되는 createdAt, updatedAt 필드를 비활성화하였습니다. 
- 연결 설정 후 testConnection() 함수를 통해 데이터베이스 연결을 테스트합니다.


<br>

**bcrypt.js (비밀번호 해싱 설정)**

```javascript
const bcrypt = require('bcrypt');

const saltRounds = 10;

// 비밀번호 해싱
async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
}

// 비밀번호 비교
async function comparePassword(inputPassword, hashedPassword) {
  try {
    const match = await bcrypt.compare(inputPassword, hashedPassword);
    return match;
  } catch (error) {
    console.error('Error comparing password:', error);
    throw error;
  }
}

module.exports = { hashPassword, comparePassword };
```

- bcrypt.js: 비밀번호 해싱과 비교를 위한 함수들을 정의한 파일입니다. 
- bcrypt 패키지를 사용하여 비밀번호를 해싱하고, 해싱된 비밀번호와 사용자가 입력한 비밀번호를 비교하는 기능을 구현하였습니다. 
- saltRounds 변수를 통해 해싱에 사용되는 솔트의 강도를 설정하였습니다.

<br>

**auth.js (인증 설정)**

```javascript
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
```

<br><br>

#### 8-2-1-3. Member 기능 구현

**회원 컨트롤러 (memberController.js)**

```javascript
const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const bcrypt = require('../utils/bcrypt');

// 회원 가입
router.post('/register', async (req, res, next) => {
  try {
    const { id, pw, name, birth, email, tel, addr1, addr2, postcode } = req.body;
    const hashedPassword = await bcrypt.hashPassword(pw);
    const newMember = await Member.create({
      id,
      pw: hashedPassword,
      name,
      birth,
      email,
      tel,
      addr1,
      addr2,
      postcode
    });
    res.json(newMember);
  } catch (error) {
    next(error);
  }
});

// 로그인
router.post('/login', async (req, res, next) => {
  try {
    const { id, pw } = req.body;
    const member = await Member.findOne({ where: { id } });
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    const isValidPassword = await bcrypt.comparePassword(pw, member.pw);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    // 세션 생성
    req.session.memberId = member.id;
    res.json({ message: 'Login successful' });
  } catch (error) {
    next(error);
  }
});

// 개인 정보 조회
router.get('/:id', async (req, res, next) => {
  try {
    const memberId = req.params.id;
    const member = await Member.findOne({ where: { id: memberId } });
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.json(member);
  } catch (error) {
    next(error);
  }
});

// 개인 정보 수정
router.put('/:id', async (req, res, next) => {
  try {
    const memberId = req.params.id;
    const updatedMember = req.body;
    await Member.update(updatedMember, { where: { id: memberId } });
    res.json({ message: 'Member updated successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
```

<br>

**회원 모델 (Member.js)**

```javascript
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
```

<br>

**memberRoutes.js**

```javascript
const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const bcrypt = require('../utils/bcrypt');

// 회원 가입
router.post('/register', async (req, res, next) => {
  try {
    const { id, pw, name, birth, email, tel, addr1, addr2, postcode } = req.body;
    const hashedPassword = await bcrypt.hashPassword(pw);
    const newMember = await Member.create({
      id,
      pw: hashedPassword,
      name,
      birth,
      email,
      tel,
      addr1,
      addr2,
      postcode
    });
    res.json(newMember);
  } catch (error) {
    next(error); // 에러 처리 미들웨어로 전달
  }
});

// 로그인
router.post('/login', async (req, res, next) => {
  try {
    const { id, pw } = req.body;
    const member = await Member.findOne({ where: { id } });
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    const isValidPassword = await bcrypt.comparePassword(pw, member.pw);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    // 세션 생성 (예시로, 실제 프로젝트에서는 세션 관리 방법에 맞게 구현해야 함)
    req.session.memberId = member.id;
    res.json({ message: 'Login successful' });
  } catch (error) {
    next(error); // 에러 처리 미들웨어로 전달
  }
});

// 로그아웃 (세션 제거 예시)
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.clearCookie('connect.sid'); // 세션 쿠키 제거 (옵션)
    res.json({ message: 'Logout successful' });
  });
});

// 개인 정보 조회
router.get('/:id', async (req, res, next) => {
  try {
    const memberId = req.params.id;
    const member = await Member.findOne({ where: { id: memberId } });
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.json(member);
  } catch (error) {
    next(error); // 에러 처리 미들웨어로 전달
  }
});

// 개인 정보 수정
router.put('/:id', async (req, res, next) => {
  try {
    const memberId = req.params.id;
    const updatedMember = req.body;
    await Member.update(updatedMember, { where: { id: memberId } });
    res.json({ message: 'Member updated successfully' });
  } catch (error) {
    next(error); // 에러 처리 미들웨어로 전달
  }
});

// 회원 탈퇴
router.delete('/:id', async (req, res, next) => {
  try {
    const memberId = req.params.id;
    await Member.destroy({ where: { id: memberId } });
    res.json({ message: 'Member deleted successfully' });
  } catch (error) {
    next(error); // 에러 처리 미들웨어로 전달
  }
});

module.exports = router;
```

- POST /register: 회원 가입 기능입니다. 요청 바디에서 받은 데이터를 사용하여 회원 정보를 생성하고 데이터베이스에 저장합니다. 비밀번호는 bcrypt를 사용하여 해시화하여 저장합니다.
- POST /login: 로그인 기능입니다. 요청 바디에서 받은 아이디와 비밀번호를 검증하여 성공하면 세션을 생성합니다. 실제 프로젝트에서는 세션 관리 방법에 맞게 구현해야 합니다.
- POST /logout: 로그아웃 기능입니다. 세션을 파괴하여 로그아웃 처리를 합니다.
- GET /:id: 특정 회원 정보 조회 기능입니다. 회원 아이디를 통해 해당 회원의 정보를 가져옵니다.
- PUT /:id: 특정 회원 정보 수정 기능입니다. 회원 아이디를 통해 해당 회원의 정보를 업데이트합니다.
- DELETE /:id: 회원 탈퇴 기능입니다. 회원 아이디를 통해 해당 회원의 정보를 삭제합니다.

<br><br>

#### 8-2-1-4. Board 기능 구현

**Board 모델 (Board.js)**

```javascript
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
```

<br>

**boardController.js**

```javascript
const Board = require('../models/Board');

// 글 목록 조회
exports.list = async (req, res, next) => {
  try {
    const boards = await Board.findAll();
    res.json(boards);
  } catch (error) {
    console.error('Error while fetching boards:', error);
    next(error); // 에러를 다음 미들웨어로 전달
  }
};

// 글 상세 조회
exports.detail = async (req, res, next) => {
  try {
    const boardNo = req.params.no;
    const board = await Board.findByPk(boardNo);
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }
    res.json(board);
  } catch (error) {
    console.error('Error while fetching board detail:', error);
    next(error); // 에러를 다음 미들웨어로 전달
  }
};

// 글 작성
exports.create = async (req, res, next) => {
  try {
    const { title, content, author } = req.body;
    const newBoard = await Board.create({
      title,
      content,
      author
    });
    res.json(newBoard);
  } catch (error) {
    console.error('Error while creating board:', error);
    next(error); // 에러를 다음 미들웨어로 전달
  }
};

// 글 수정
exports.update = async (req, res, next) => {
  try {
    const boardNo = req.params.no;
    const updatedBoard = req.body;
    await Board.update(updatedBoard, { where: { no: boardNo } });
    res.json({ message: 'Board updated successfully' });
  } catch (error) {
    console.error('Error while updating board:', error);
    next(error); // 에러를 다음 미들웨어로 전달
  }
};

// 글 삭제
exports.delete = async (req, res, next) => {
  try {
    const boardNo = req.params.no;
    await Board.destroy({ where: { no: boardNo } });
    res.json({ message: 'Board deleted successfully' });
  } catch (error) {
    console.error('Error while deleting board:', error);
    next(error); // 에러를 다음 미들웨어로 전달
  }
};
```

<br>

**boardRoutes.js**

```javascript
const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardController');

// 글 목록 조회
router.get('/boards', boardController.list);

// 글 상세 조회
router.get('/:no', boardController.detail);

// 글 작성
router.post('/write', boardController.create);

// 글 수정
router.put('/edit/:no', boardController.update);

// 글 삭제
router.delete('/delete/:no', boardController.delete);

module.exports = router;
```

- Board 모델: Sequelize를 사용하여 데이터베이스와 연동된 Board 모델을 정의합니다. no, title, content, author, resdate, hits 필드를 포함합니다.
- boardController: Express 라우터에서 사용할 컨트롤러입니다. 각 HTTP 요청에 따라 데이터베이스에서 데이터를 조회하고 수정하는 등의 작업을 합니다.
- boardRoutes: Express 라우터를 정의하여 HTTP 요청에 따라 적절한 컨트롤러 함수를 호출합니다. RESTful API 디자인을 따릅니다.
위의 코드 예시는 각 기능의 기본적인 CRUD(Create, Read, Update, Delete) 기능을 구현한 것입니다. 실제 프로젝트에서는 필요에 따라 더 많은 기능을 추가하거나 보안, 유효성 검사 등을 강화할 수 있습니다. 또한, 데이터베이스 연결 설정과 모델 정의는 프로젝트에 맞게 세밀하게 조정되어야 합니다.

<br><br>

#### 8-2-1-5. QnA 기능 구현

**QNA 모델 (QNA.js)**

```javascript
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
```

<br>

**qnaController.js**

```javascript
const QNA = require('../models/QNA');

// 질문 목록 조회
const list = async (req, res, next) => {
  try {
    const qnas = await QNA.findAll();
    res.json(qnas);
  } catch (error) {
    next(error);
  }
};

// 질문 상세 조회
const detail = async (req, res, next) => {
  try {
    const qno = req.params.qno;
    const qna = await QNA.findByPk(qno);
    if (!qna) {
      return res.status(404).json({ message: 'QNA not found' });
    }
    res.json(qna);
  } catch (error) {
    next(error);
  }
};

// 질문 작성
const create = async (req, res, next) => {
  try {
    const { title, content, author } = req.body;
    const newQNA = await QNA.create({
      title,
      content,
      author
    });
    res.json(newQNA);
  } catch (error) {
    next(error);
  }
};

// 답변 조회
const getAnswer = async (req, res, next) => {
  try {
    const qno = req.params.qno;
    const answer = await QNA.findAll({ where: { parno: qno } });
    if (!answer) {
      return res.status(404).json({ message: 'Answer not found' });
    }
    res.json(answer);
  } catch (error) {
    next(error);
  }
};

// 질문 수정
const update = async (req, res, next) => {
  try {
    const qno = req.params.qno;
    const updatedQNA = req.body;
    await QNA.update(updatedQNA, { where: { qno } });
    res.json({ message: 'QNA updated successfully' });
  } catch (error) {
    next(error);
  }
};

// 질문 삭제
const deleteQna = async (req, res, next) => {
  try {
    const qno = req.params.qno;
    await QNA.destroy({ where: { qno } });
    res.json({ message: 'QNA deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  list,
  detail,
  create,
  getAnswer,
  update,
  delete: deleteQna
};
```

<br>

**qnaRoutes.js**

```javascript
const express = require('express');
const router = express.Router();
const qnaController = require('../controllers/qnaController');

// 질문 목록 조회
router.get('/qnas', qnaController.list);

// 질문 상세 조회
router.get('/:qno', qnaController.detail);

// 질문 작성
router.post('/write', qnaController.create);

// 답변 조회
router.get('/:qno/answer', qnaController.getAnswer);

// 질문 수정
router.put('/edit/:qno', qnaController.update);

// 질문 삭제
router.delete('/delete/:qno', qnaController.delete);

module.exports = router;
```

- QNA 모델: Sequelize를 사용하여 데이터베이스와 연동된 QNA 모델을 정의합니다. qno, lev, parno, title, content, author, resdate, hits 필드를 포함합니다.
- qnaController: Express 라우터에서 사용할 컨트롤러입니다. 각 HTTP 요청에 따라 데이터베이스에서 데이터를 조회하고 수정하는 등의 작업을 합니다. getAnswer 함수는 특정 질문에 대한 답변을 조회하는 기능을 추가로 구현하였습니다.
- qnaRoutes: Express 라우터를 정의하여 HTTP 요청에 따라 적절한 컨트롤러 함수를 호출합니다. RESTful API 디자인을 따릅니다.
위의 코드 예시는 각 기능의 기본적인 CRUD(Create, Read, Update, Delete) 기능을 구현한 것입니다. 실제 프로젝트에서는 필요에 따라 더 많은 기능을 추가하거나 보안, 유효성 검사 등을 강화할 수 있습니다. 또한, 데이터베이스 연결 설정과 모델 정의는 프로젝트에 맞게 세밀하게 조정되어야 합니다.

<br><br>

#### 8-2-1-6. Dataroom(자료실) 기능 구현

**Dataroom 모델 (Dataroom.js)**

```javascript
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
```

<br>

**dataroomController.js**

```javascript
const Dataroom = require('../models/Dataroom');
const fs = require('fs');

// 글 등록 및 파일 업로드
const create = async (req, res, next) => {
  try {
    const { title, content, author } = req.body;
    const datafile = req.file ? req.file.path : null; // 업로드된 파일 경로
    const newDataroom = await Dataroom.create({
      title,
      content,
      author,
      datafile
    });
    res.json(newDataroom);
  } catch (error) {
    next(error);
  }
};

// 글 수정 및 파일 변경
const update = async (req, res, next) => {
  try {
    const dno = req.params.dno;
    let updatedDataroom = req.body;
    if (req.file) {
      updatedDataroom.datafile = req.file.path; // 새로 업로드된 파일 경로로 변경
    }
    await Dataroom.update(updatedDataroom, { where: { dno } });
    res.json({ message: 'Dataroom updated successfully' });
  } catch (error) {
    next(error);
  }
};

// 글 삭제 및 파일 삭제
const deleteDataroom = async (req, res, next) => {
  try {
    const dno = req.params.dno;
    const dataroom = await Dataroom.findByPk(dno);
    if (!dataroom) {
      return res.status(404).json({ message: 'Dataroom not found' });
    }
    if (dataroom.datafile) {
      // 파일이 존재할 경우 삭제
      fs.unlinkSync(dataroom.datafile);
    }
    await Dataroom.destroy({ where: { dno } });
    res.json({ message: 'Dataroom deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// 글 목록 조회
const list = async (req, res, next) => {
  try {
    const datarooms = await Dataroom.findAll();
    res.json(datarooms);
  } catch (error) {
    next(error);
  }
};

// 글 상세 조회
const detail = async (req, res, next) => {
  try {
    const dno = req.params.dno;
    const dataroom = await Dataroom.findByPk(dno);
    if (!dataroom) {
      return res.status(404).json({ message: 'Dataroom not found' });
    }
    res.json(dataroom);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  update,
  delete: deleteDataroom,
  list,
  detail
};
```

<br>

**dataroomRoutes.js**

```javascript
const express = require('express');
const multer = require('multer');
const router = express.Router();
const dataroomController = require('../controllers/dataroomController');

// 파일 업로드 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // 업로드할 디렉토리 설정
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // 파일 이름 설정
  }
});
const upload = multer({ storage });

// 글 등록 및 파일 업로드
router.post('/write', upload.single('datafile'), dataroomController.create);

// 글 수정 및 파일 변경
router.put('/edit/:dno', upload.single('datafile'), dataroomController.update);

// 글 삭제 및 파일 삭제
router.delete('/delete/:dno', dataroomController.delete);

// 글 목록 조회
router.get('/datas', dataroomController.list);

// 글 상세 조회
router.get('/:dno', dataroomController.detail);

module.exports = router;
```

- Dataroom 모델: Sequelize를 사용하여 데이터베이스와 연동된 Dataroom 모델을 정의합니다. dno, title, content, author, datafile, resdate, hits 필드를 포함합니다. datafile은 파일 경로를 저장하는 문자열 타입으로 설정하였습니다.
- dataroomController: Express 라우터에서 사용할 컨트롤러입니다. multer를 사용하여 파일 업로드 기능을 구현하였습니다. 업로드된 파일은 /uploads 디렉토리에 저장되며, 글 수정 시에도 파일을 변경할 수 있는 기능을 추가하였습니다.
- dataroomRoutes: Express 라우터를 정의하여 HTTP 요청에 따라 적절한 컨트롤러 함수를 호출합니다. RESTful API 디자인을 따릅니다.

<br><br>

#### 8-2-1-7. Product(상품) 기능 구현

**Product 모델 (Product.js)**

```javascript
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
```

<br>

**productController.js**

```javascript
const Product = require('../models/Product');
const fs = require('fs');

// 상품 등록 및 이미지 파일 업로드
const create = async (req, res, next) => {
  try {
    const { cate, pname, pcontent } = req.body;
    const img1 = req.files['img1'] ? req.files['img1'][0].path : null; // 업로드된 파일 경로
    const img2 = req.files['img2'] ? req.files['img2'][0].path : null;
    const img3 = req.files['img3'] ? req.files['img3'][0].path : null;
    const newProduct = await Product.create({
      cate,
      pname,
      pcontent,
      img1,
      img2,
      img3
    });
    res.json(newProduct);
  } catch (error) {
    next(error);
  }
};

// 상품 정보 수정 및 이미지 파일 변경
const update = async (req, res, next) => {
  try {
    const pno = req.params.pno;
    let updatedProduct = req.body;
    if (req.files['img1']) {
      updatedProduct.img1 = req.files['img1'][0].path; // 새로 업로드된 파일 경로로 변경
    }
    if (req.files['img2']) {
      updatedProduct.img2 = req.files['img2'][0].path;
    }
    if (req.files['img3']) {
      updatedProduct.img3 = req.files['img3'][0].path;
    }
    await Product.update(updatedProduct, { where: { pno } });
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    next(error);
  }
};

// 상품 삭제 및 이미지 파일 삭제
const deleteProduct = async (req, res, next) => {
  try {
    const pno = req.params.pno;
    const product = await Product.findByPk(pno);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (product.img1) {
      fs.unlinkSync(product.img1); // 파일 삭제
    }
    if (product.img2) {
      fs.unlinkSync(product.img2);
    }
    if (product.img3) {
      fs.unlinkSync(product.img3);
    }
    await Product.destroy({ where: { pno } });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// 상품 목록 조회
const list = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// 상품 상세 조회
const detail = async (req, res, next) => {
  try {
    const pno = req.params.pno;
    const product = await Product.findByPk(pno);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  update,
  delete: deleteProduct,
  list,
  detail
};
```

<br>

**productRoutes.js**

```javascript
const express = require('express');
const multer = require('multer');
const router = express.Router();
const productController = require('../controllers/productController');

// 파일 업로드 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/products'); // 업로드할 디렉토리 설정
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // 파일 이름 설정
  }
});
const upload = multer({ storage });

// 상품 등록 및 이미지 파일 업로드
router.post('/write', upload.fields([{ name: 'img1', maxCount: 1 }, { name: 'img2', maxCount: 1 }, { name: 'img3', maxCount: 1 }]), productController.create);

// 상품 정보 수정 및 이미지 파일 변경
router.put('/edit/:pno', upload.fields([{ name: 'img1', maxCount: 1 }, { name: 'img2', maxCount: 1 }, { name: 'img3', maxCount: 1 }]), productController.update);

// 상품 삭제 및 이미지 파일 삭제
router.delete('/delete/:pno', productController.delete);

// 상품 목록 조회
router.get('/products', productController.list);

// 상품 상세 조회
router.get('/:pno', productController.detail);

module.exports = router;
```

- Product 모델: Sequelize를 사용하여 데이터베이스와 연동된 Product 모델을 정의합니다. pno, cate, pname, pcontent, img1, img2, img3, resdate, hits 필드를 포함합니다. img1, img2, img3는 상품의 썸네일 이미지, 배너 이미지, 설명 이미지의 경로를 저장하는 문자열 타입으로 설정하였습니다.
- productController: Express 라우터에서 사용할 컨트롤러입니다. multer를 사용하여 이미지 파일 업로드 기능을 구현하였습니다. 상품 정보 수정 시에는 이미지 파일을 변경할 수 있는 기능을 추가하였습니다. 상품 삭제 시에는 해당 이미지 파일도 함께 삭제되도록 구현하였습니다.
- productRoutes: Express 라우터를 정의하여 HTTP 요청에 따라 적절한 컨트롤러 함수를 호출합니다. RESTful API 디자인을 따릅니다.

<br><br>

#### 8-2-1-8. 온라인 상담(이메일 보내기) 기능 구현

**1. Express 애플리케이션 설정**

- Express 애플리케이션에 필요한 패키지들을 설치합니다.

```bash
D:\gitRepository\sunglee0517\vuejs\study07\backend\node>npm install nodemailer body-parser --save-dev

added 1 package, and audited 190 packages in 1s

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

<br>

**2. 온라인 상담신청 폼 구현**

- 온라인 상담신청 폼을 HTML로 작성합니다. 
- Vue.js와 Tailwind CSS를 사용합니다.

```html
<!-- /views/onlineForm.vue -->
<template>
  <div>
    <h2>온라인 상담 신청</h2>
    <form @submit.prevent="submitForm">
      <label for="email">이메일 주소:</label>
      <input type="email" id="email" v-model="email" required>
      
      <label for="subject">메일 제목:</label>
      <input type="text" id="subject" v-model="subject" required>
      
      <label for="message">메일 내용:</label>
      <textarea id="message" v-model="message" required></textarea>
      
      <button type="submit">온라인 상담 신청</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      subject: '',
      message: ''
    };
  },
  methods: {
    async submitForm() {
      const response = await fetch('/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          subject: this.subject,
          message: this.message
        })
      });
      const result = await response.json();
      console.log(result); // Optional: handle response from server
    }
  }
};
</script>

<style scoped>
/* Tailwind CSS classes or custom styles */
</style>
```

<br>

**3. Express 라우터 및 이메일 발송 기능 구현**

- Express 애플리케이션에 nodemailer를 사용하여 이메일 발송 기능을 추가합니다. 아래는 /sendEmail 엔드포인트에 대한 처리 로직입니다.

```javascript
// app.js 이메일 발송 설정 추가
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const memberRoutes = require('./routes/memberRoutes');
const boardRoutes = require('./routes/boardRoutes');
const qnaRoutes = require('./routes/qnaRoutes');
const dataroomRoutes = require('./routes/dataroomRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));
app.use(express.json()); // JSON 파싱 미들웨어

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/member', memberRoutes);
app.use('/board', boardRoutes);
app.use('/qna', qnaRoutes);
app.use('/dataroom', dataroomRoutes);
app.use('/product', productRoutes);

// POST 요청을 처리하는 라우터 설정
app.post('/sendEmail', async (req, res) => {
  const { email, password, recipient, subject, message } = req.body;

  try {
    // SMTP transporter 설정 (Gmail 예시)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email, // 발송할 Gmail 계정
        pass: password // Gmail 계정 비밀번호 또는 앱 비밀번호
      }
    });

    // 발송할 이메일 정보
    const mailOptions = {
      from: email,
      to: recipient, // 받는 사람 이메일 주소
      subject: subject,
      text: `보낸 사람 이메일 주소: ${email}\n\n${message}`
    };

    // 이메일 발송
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

// 기타 라우터 설정
// ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

- 온라인 상담신청 폼: Vue.js와 Tailwind CSS를 사용하여 간단한 폼을 구현했습니다. 사용자가 이메일 주소, 메일 제목, 메일 내용을 입력하고 폼을 제출하면, /sendEmail 엔드포인트로 POST 요청을 보냅니다.
- Express 라우터: /sendEmail 엔드포인트는 POST 요청을 받아서 nodemailer를 사용하여 구글 이메일 주소인 kkt09072@gmail.com로 이메일을 발송하는 기능을 구현합니다.
- nodemailer 설정: Gmail을 예시로 사용하였으며, 실제 프로덕션 환경에서는 Gmail의 보안 설정에 따라 앱 비밀번호를 사용할 수 있습니다.


<br><br><br>

### 8-2-2. Front-End

#### 8-2-2-1. 프로젝트 구조

**프로젝트 구조**

```lua
study09/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
├── src/
│   ├── api/
│   │   └── index.js
│   ├── assets/
│   │   ├── logo.png
│   ├── components/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── BoardList.vue
│   │   ├── BoardDetail.vue
│   │   ├── BoardInsert.vue
│   │   ├── BoardUpdate.vue
│   │   ├── QnaList.vue
│   │   ├── QnaDetail.vue
│   │   ├── QnaInsert.vue
│   │   ├── QnaUpdate.vue
│   │   ├── DataroomList.vue
│   │   ├── DataroomDetail.vue
│   │   ├── DataroomInsert.vue
│   │   ├── DataroomUpdate.vue
│   │   ├── ProductList.vue
│   │   ├── ProductDetail.vue
│   │   ├── ProductInsert.vue
│   │   ├── ProductUpdate.vue
│   │   ├── MemberList.vue
│   │   ├── MemberDetail.vue
│   │   ├── MemberRegister.vue
│   │   ├── MemberLogin.vue
│   │   ├── MemberInfo.vue
│   │   ├── MemberUpdate.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   ├── main.js
├── .gitignore
├── babel.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
└── vite.config.js
```

<br>

**주요 구성 요소 및 파일/폴더**

public/: 정적 파일을 저장하는 폴더로, favicon.ico와 index.html을 포함합니다.
src/: 소스 코드가 위치한 폴더로, 애플리케이션의 주요 구성 요소를 포함합니다.
api/: Axios를 사용하여 API 요청을 처리하는 모듈이 있는 폴더입니다.
index.js: API 요청을 처리하는 Axios 인스턴스입니다.
assets/: 이미지, 폰트 등 정적 자산을 저장하는 폴더입니다.
logo.png: 로고 이미지입니다.
components/: Vue 컴포넌트가 위치한 폴더입니다.
Header.vue, Footer.vue: 모든 페이지에 공통으로 포함될 헤더와 푸터 컴포넌트입니다.
BoardList.vue, BoardDetail.vue, BoardInsert.vue, BoardUpdate.vue: 게시판 관련 컴포넌트입니다.
QnaList.vue, QnaDetail.vue, QnaInsert.vue, QnaUpdate.vue: Q&A 관련 컴포넌트입니다.
DataroomList.vue, DataroomDetail.vue, DataroomInsert.vue, DataroomUpdate.vue: 자료실 관련 컴포넌트입니다.
ProductList.vue, ProductDetail.vue, ProductInsert.vue, ProductUpdate.vue: 제품 관련 컴포넌트입니다.
MemberList.vue, MemberDetail.vue, MemberRegister.vue, MemberLogin.vue, MemberInfo.vue, MemberUpdate.vue: 회원 관련 컴포넌트입니다.
router/: Vue Router 설정 파일이 있는 폴더입니다.
index.js: 라우터 설정 파일입니다.
App.vue: 애플리케이션의 루트 컴포넌트입니다.
main.js: 애플리케이션의 진입 파일로, Vue 인스턴스를 생성하고 마운트합니다.
.gitignore: Git이 무시할 파일과 폴더를 지정하는 파일입니다.
babel.config.js: Babel 설정 파일입니다.
package.json: 프로젝트 메타데이터 및 의존성을 지정하는 파일입니다.
postcss.config.js: PostCSS 설정 파일입니다.
tailwind.config.js: Tailwind CSS 설정 파일입니다.
README.md: 프로젝트에 대한 설명을 담은 파일입니다.

<br><br>

#### 8-2-2-2. 프로젝트 생성 및 설정

**프로젝트 생성 및 필요한 자원 설치**

```bash
# 프로젝트 생성
vue create study09

# 프로젝트 디렉토리로 이동
cd study09

# Tailwind CSS 설치
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# Tailwind CSS 설정 파일 생성
npx tailwindcss init
```

<br>

**tailwind.config.js 파일 수정**

```javascript
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

<br>

**src/assets/tailwind.css 파일 생성 및 내용 추가**

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<br>

**src/main.js 파일 수정**

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

createApp(App).use(router).mount('#app');
```

<br>

#### 8-2-2-3. 애플리케이션 설정 

**src/api/index.js**

```javascript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;
```

<br>

#### 8-2-2-4. 라우터 설정 

**src/router/index.js**

```javascript
코드 복사
import { createRouter, createWebHistory } from 'vue-router';
import BoardList from '../components/BoardList.vue';
import BoardDetail from '../components/BoardDetail.vue';
import BoardInsert from '../components/BoardInsert.vue';
import BoardUpdate from '../components/BoardUpdate.vue';
import QnaList from '../components/QnaList.vue';
import QnaDetail from '../components/QnaDetail.vue';
import QnaInsert from '../components/QnaInsert.vue';
import QnaUpdate from '../components/QnaUpdate.vue';
import DataroomList from '../components/DataroomList.vue';
import DataroomDetail from '../components/DataroomDetail.vue';
import DataroomInsert from '../components/DataroomInsert.vue';
import DataroomUpdate from '../components/DataroomUpdate.vue';
import ProductList from '../components/ProductList.vue';
import ProductDetail from '../components/ProductDetail.vue';
import ProductInsert from '../components/ProductInsert.vue';
import ProductUpdate from '../components/ProductUpdate.vue';
import MemberRegister from '../components/MemberRegister.vue';
import MemberLogin from '../components/MemberLogin.vue';
import MemberInfo from '../components/MemberInfo.vue';
import MemberUpdate from '../components/MemberUpdate.vue';

const routes = [
  { path: '/', component: BoardList },
  { path: '/board/:id', component: BoardDetail },
  { path: '/board/insert', component: BoardInsert },
  { path: '/board/update/:id', component: BoardUpdate },
  { path: '/qna', component: QnaList },
  { path: '/qna/:id', component: QnaDetail },
  { path: '/qna/insert', component: QnaInsert },
  { path: '/qna/update/:id', component: QnaUpdate },
  { path: '/dataroom', component: DataroomList },
  { path: '/dataroom/:id', component: DataroomDetail },
  { path: '/dataroom/insert', component: DataroomInsert },
  { path: '/dataroom/update/:id', component: DataroomUpdate },
  { path: '/product', component: ProductList },
  { path: '/product/:id', component: ProductDetail },
  { path: '/product/insert', component: ProductInsert },
  { path: '/product/update/:id', component: ProductUpdate },
  { path: '/member/register', component: MemberRegister },
  { path: '/member/login', component: MemberLogin },
  { path: '/member/info', component: MemberInfo },
  { path: '/member/update', component: MemberUpdate }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
```

<br>

#### 8-2-2-5. 공통 컴포넌트 작성

**src/components/Header.vue**

```vue
<template>
  <header id="hd" class="header">
    <a class="logo">
      <img src="/dist/img/logo.png" alt="로고심볼" />
    </a>
    <nav id="tnb">
      <ul class="menu">
        <li><a href="/member/login">로그인</a></li>
        <li><a href="/member/terms">회원가입</a></li>
      </ul>
    </nav>
    <nav id="gnb">
      <ul class="menu">
        <li>
          <a href="/company" class="dp1">Company</a>
          <ul class="sub">
            <li><a href="/company/intro">회사소개</a></li>
            <li><a href="/company/hitory">회사연혁</a></li>
            <li><a href="/company/greetings">인사말</a></li>
            <li><a href="/company/organization">조직</a></li>
          </ul>
        </li>
        <li>
          <a href="/product" class="dp1">Product</a>
          <ul class="sub">
            <li><a href="/product/a01">도서</a></li>
            <li><a href="/product/b01">문구</a></li>
            <li><a href="/product/c01">학습</a></li>
            <li><a href="/product/d01">액세사리</a></li>
          </ul>
        </li>
        <li>
          <a href="/service" class="dp1">Service</a>
          <ul class="sub">
            <li><a href="/service/online">온라인 서비스</a></li>
            <li><a href="/service/visit">방문 서비스</a></li>
            <li><a href="/service/delivery">택배 서비스</a></li>
            <li><a href="/service/reservation">시설 이용 예약 서비스</a></li>
          </ul>
        </li>
        <li>
          <a href="/community" class="dp1">Community</a>
          <ul class="sub">
            <li><a href="/community/notice">공지사항</a></li>
            <li><a href="/community/qna">질문 및 답변</a></li>
            <li><a href="/community/dataroom">자료실</a></li>
            <li><a href="/community/faq">자주하는 질문</a></li>
            <li><a href="/community/online">온라인 상담</a></li>
            <li><a href="/community/chatbot">챗봇 상담</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  @apply flex flex-col items-center bg-gray-100 p-4 shadow-md;
}

.logo img {
  @apply w-32;
}

#tnb .menu, #gnb .menu {
  @apply flex space-x-4 mt-2;
}

.dp1 {
  @apply font-bold text-lg;
}

.sub {
  @apply hidden;
}

.dp1:hover + .sub, .sub:hover {
  @apply block;
}

.sub li {
  @apply bg-gray-200 p-2;
}
</style>
```

<br>

**src/components/Footer.vue**

```vue
<template>
  <footer id="ft">
    <nav id="fnb">
      <ul class="menu">
        <li><a href="/member/privacy">개인정보처리방침</a></li>
        <li><a href="/member/term">회원약관</a></li>
        <li><a href="/member/maps">오시는 길</a></li>
        <li><a href="/member/tomail">관리자에게</a></li>
      </ul>
      <div class="loc">
        <select id="sel" name="sel">
          <option value="">사이트 바로가기</option>
          <option value="">문구 쇼핑몰</option>
          <option value="">도서 쇼핑몰</option>
          <option value="">온라인 학습</option>
          <option value="">액세사리 쇼핑몰</option>
        </select>
      </div>
    </nav>
    <div class="ft_wrap">
      <p class="ft_content"><span class="info">법인명 : (주)기태</span>     
        <span class="info">대표자 : 김기태</span>
        <span class="info">사업자등록번호안내: 104-32-278391 </span>
        <span class="info">통신판매업신고번호 제2024-서울중구-0218호</span></p>
      <p class="ft_content"><span class="info">대표전화 : 02-3214-0414</span>
        <span class="info">팩스 : 02-3214-0420</span>
        <span class="info">본사주소 : 서울시 중구 삼각동 271-38 [11013]</span></p>
      <p class="ft_content">개인정보관리책임자: 김기태(admin@gitae.co.kr)</p>
      <p class="copyright">Copryight (C) 2024 gitae. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#ft {
  @apply bg-gray-100 p-4 mt-4;
}

#fnb .menu {
  @apply flex space-x-4 mb-2;
}

.ft_content {
  @apply mb-1;
}

.info {
  @apply mr-4;
}

.copyright {
  @apply text-center mt-4;
}
</style>
```

<br>

#### 8-2-2-6. Board 관련 컴포넌트

**src/components/BoardList.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Board List</h1>
    <router-link to="/board/insert" class="btn">Create New Post</router-link>
    <ul>
      <li v-for="board in boards" :key="board.id">
        <router-link :to="'/board/' + board.id">{{ board.title }}</router-link>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'BoardList',
  components: { Header, Footer },
  data() {
    return {
      boards: []
    };
  },
  async created() {
    const response = await apiClient.get('/boards');
    this.boards = response.data;
  }
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/BoardDetail.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Board Detail</h1>
    <div v-if="board">
      <h2>{{ board.title }}</h2>
      <p>{{ board.content }}</p>
      <router-link :to="'/board/update/' + board.id" class="btn">Edit</router-link>
      <button @click="deleteBoard" class="btn">Delete</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'BoardDetail',
  components: { Header, Footer },
  data() {
    return {
      board: null
    };
  },
  async created() {
    const response = await apiClient.get(`/boards/${this.$route.params.id}`);
    this.board = response.data;
  },
  methods: {
    async deleteBoard() {
      await apiClient.delete(`/boards/${this.$route.params.id}`);
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-red-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/BoardInsert.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Create New Board</h1>
    <form @submit.prevent="insertBoard">
      <div class="mb-4">
        <label class="block mb-1">Title</label>
        <input v-model="title" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Content</label>
        <textarea v-model="content" class="border p-2 w-full"></textarea>
      </div>
      <button type="submit" class="btn">Create</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'BoardInsert',
  components: { Header, Footer },
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    async insertBoard() {
      await apiClient.post('/boards', {
        title: this.title,
        content: this.content
      });
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-green-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/BoardUpdate.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Edit Board</h1>
    <form @submit.prevent="updateBoard">
      <div class="mb-4">
        <label class="block mb-1">Title</label>
        <input v-model="title" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Content</label>
        <textarea v-model="content" class="border p-2 w-full"></textarea>
      </div>
      <button type="submit" class="btn">Update</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'BoardUpdate',
  components: { Header, Footer },
  data() {
    return {
      title: '',
      content: ''
    };
  },
  async created() {
    const response = await apiClient.get(`/boards/${this.$route.params.id}`);
    const board = response.data;
    this.title = board.title;
    this.content = board.content;
  },
  methods: {
    async updateBoard() {
      await apiClient.put(`/boards/${this.$route.params.id}`, {
        title: this.title,
        content: this.content
      });
      this.$router.push(`/board/${this.$route.params.id}`);
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

#### 8-2-2-7. Qna 관련 컴포넌트

**src/components/QnaList.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Q&A List</h1>
    <router-link to="/qna/insert" class="btn">Create New Q&A</router-link>
    <ul>
      <li v-for="qna in qnas" :key="qna.id">
        <router-link :to="'/qna/' + qna.id">{{ qna.title }}</router-link>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'QnaList',
  components: { Header, Footer },
  data() {
    return {
      qnas: []
    };
  },
  async created() {
    const response = await apiClient.get('/qnas');
    this.qnas = response.data;
  }
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/QnaDetail.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Q&A Detail</h1>
    <div v-if="qna">
      <h2>{{ qna.title }}</h2>
      <p>{{ qna.content }}</p>
      <router-link :to="'/qna/update/' + qna.id" class="btn">Edit</router-link>
      <button @click="deleteQna" class="btn">Delete</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'QnaDetail',
  components: { Header, Footer },
  data() {
    return {
      qna: null
    };
  },
  async created() {
    const response = await apiClient.get(`/qnas/${this.$route.params.id}`);
    this.qna = response.data;
  },
  methods: {
    async deleteQna() {
      await apiClient.delete(`/qnas/${this.$route.params.id}`);
      this.$router.push('/qna');
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-red-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/QnaInsert.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Create New Q&A</h1>
    <form @submit.prevent="insertQna">
      <div class="mb-4">
        <label class="block mb-1">Title</label>
        <input v-model="title" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Content</label>
        <textarea v-model="content" class="border p-2 w-full"></textarea>
      </div>
      <button type="submit" class="btn">Create</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'QnaInsert',
  components: { Header, Footer },
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    async insertQna() {
      await apiClient.post('/qnas', {
        title: this.title,
        content: this.content
      });
      this.$router.push('/qna');
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-green-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/QnaUpdate.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Edit Q&A</h1>
    <form @submit.prevent="updateQna">
      <div class="mb-4">
        <label class="block mb-1">Title</label>
        <input v-model="title" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Content</label>
        <textarea v-model="content" class="border p-2 w-full"></textarea>
      </div>
      <button type="submit" class="btn">Update</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'QnaUpdate',
  components: { Header, Footer },
  data() {
    return {
      title: '',
      content: ''
    };
  },
  async created() {
    const response = await apiClient.get(`/qnas/${this.$route.params.id}`);
    const qna = response.data;
    this.title = qna.title;
    this.content = qna.content;
  },
  methods: {
    async updateQna() {
      await apiClient.put(`/qnas/${this.$route.params.id}`, {
        title: this.title,
        content: this.content
      });
      this.$router.push(`/qna/${this.$route.params.id}`);
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
</style>
```

<br><br>

#### 8-2-2-8. Dataroom 관련 컴포넌트

**src/components/DataroomList.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Dataroom List</h1>
    <router-link to="/dataroom/insert" class="btn">Create New Data</router-link>
    <ul>
      <li v-for="dataroom in datarooms" :key="dataroom.id">
        <router-link :to="'/dataroom/' + dataroom.id">{{ dataroom.title }}</router-link>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'DataroomList',
  components: { Header, Footer },
  data() {
    return {
      datarooms: []
    };
  },
  async created() {
    const response = await apiClient.get('/datarooms');
    this.datarooms = response.data;
  }
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/DataroomDetail.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Dataroom Detail</h1>
    <div v-if="dataroom">
      <h2>{{ dataroom.title }}</h2>
      <p>{{ dataroom.content }}</p>
      <router-link :to="'/dataroom/update/' + dataroom.id" class="btn">Edit</router-link>
      <button @click="deleteDataroom" class="btn">Delete</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'DataroomDetail',
  components: { Header, Footer },
  data() {
    return {
      dataroom: null
    };
  },
  async created() {
    const response = await apiClient.get(`/datarooms/${this.$route.params.id}`);
    this.dataroom = response.data;
  },
  methods: {
    async deleteDataroom() {
      await apiClient.delete(`/datarooms/${this.$route.params.id}`);
      this.$router.push('/dataroom');
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-red-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/DataroomInsert.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Create New Data</h1>
    <form @submit.prevent="insertDataroom">
      <div class="mb-4">
        <label class="block mb-1">Title</label>
        <input v-model="title" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Content</label>
        <textarea v-model="content" class="border p-2 w-full"></textarea>
      </div>
      <button type="submit" class="btn">Create</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'DataroomInsert',
  components: { Header, Footer },
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    async insertDataroom() {
      await apiClient.post('/datarooms', {
        title: this.title,
        content: this.content
      });
      this.$router.push('/dataroom');
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-green-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/DataroomUpdate.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Edit Data</h1>
    <form @submit.prevent="updateDataroom">
      <div class="mb-4">
        <label class="block mb-1">Title</label>
        <input v-model="title" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Content</label>
        <textarea v-model="content" class="border p-2 w-full"></textarea>
      </div>
      <button type="submit" class="btn">Update</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'DataroomUpdate',
  components: { Header, Footer },
  data() {
    return {
      title: '',
      content: ''
    };
  },
  async created() {
    const response = await apiClient.get(`/datarooms/${this.$route.params.id}`);
    const dataroom = response.data;
    this.title = dataroom.title;
    this.content = dataroom.content;
  },
  methods: {
    async updateDataroom() {
      await apiClient.put(`/datarooms/${this.$route.params.id}`, {
        title: this.title,
        content: this.content
      });
      this.$router.push(`/dataroom/${this.$route.params.id}`);
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
</style>
```

#### 8-2-2-9. Product 관련 컴포넌트

**src/components/ProductList.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Product List</h1>
    <router-link to="/product/insert" class="btn">Create New Product</router-link>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="'/product/' + product.id">{{ product.name }}</router-link>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'ProductList',
  components: { Header, Footer },
  data() {
    return {
      products: []
    };
  },
  async created() {
    const response = await apiClient.get('/products');
    this.products = response.data;
  }
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/ProductDetail.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Product Detail</h1>
    <div v-if="product">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <router-link :to="'/product/update/' + product.id" class="btn">Edit</router-link>
      <button @click="deleteProduct" class="btn">Delete</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'ProductDetail',
  components: { Header, Footer },
  data() {
    return {
      product: null
    };
  },
  async created() {
    const response = await apiClient.get(`/products/${this.$route.params.id}`);
    this.product = response.data;
  },
  methods: {
    async deleteProduct() {
      await apiClient.delete(`/products/${this.$route.params.id}`);
      this.$router.push('/product');
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-red-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/ProductInsert.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Create New Product</h1>
    <form @submit.prevent="insertProduct">
      <div class="mb-4">
        <label class="block mb-1">Name</label>
        <input v-model="name" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Description</label>
        <textarea v-model="description" class="border p-2 w-full"></textarea>
      </div>
      <button type="submit" class="btn">Create</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'ProductInsert',
  components: { Header, Footer },
  data() {
    return {
      name: '',
      description: ''
    };
  },
  methods: {
    async insertProduct() {
      await apiClient.post('/products', {
        name: this.name,
        description: this.description
      });
      this.$router.push('/product');
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-green-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/ProductUpdate.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Edit Product</h1>
    <form @submit.prevent="updateProduct">
      <div class="mb-4">
        <label class="block mb-1">Name</label>
        <input v-model="name" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Description</label>
        <textarea v-model="description" class="border p-2 w-full"></textarea>
      </div>
      <button type="submit" class="btn">Update</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'ProductUpdate',
  components: { Header, Footer },
  data() {
    return {
      name: '',
      description: ''
    };
  },
  async created() {
    const response = await apiClient.get(`/products/${this.$route.params.id}`);
    const product = response.data;
    this.name = product.name;
    this.description = product.description;
  },
  methods: {
    async updateProduct() {
      await apiClient.put(`/products/${this.$route.params.id}`, {
        name: this.name,
        description: this.description
      });
      this.$router.push(`/product/${this.$route.params.id}`);
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
</style>
```

#### 8-2-2-10. Router 설정

**src/router/index.js**

```js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import BoardList from '../components/BoardList.vue';
import BoardDetail from '../components/BoardDetail.vue';
import BoardInsert from '../components/BoardInsert.vue';
import BoardUpdate from '../components/BoardUpdate.vue';
import QnaList from '../components/QnaList.vue';
import QnaDetail from '../components/QnaDetail.vue';
import QnaInsert from '../components/QnaInsert.vue';
import QnaUpdate from '../components/QnaUpdate.vue';
import DataroomList from '../components/DataroomList.vue';
import DataroomDetail from '../components/DataroomDetail.vue';
import DataroomInsert from '../components/DataroomInsert.vue';
import DataroomUpdate from '../components/DataroomUpdate.vue';
import ProductList from '../components/ProductList.vue';
import ProductDetail from '../components/ProductDetail.vue';
import ProductInsert from '../components/ProductInsert.vue';
import ProductUpdate from '../components/ProductUpdate.vue';
import MemberList from '../components/MemberList.vue';
import MemberDetail from '../components/MemberDetail.vue';
import MemberRegister from '../components/MemberRegister.vue';
import MemberLogin from '../components/MemberLogin.vue';
import MemberInfo from '../components/MemberInfo.vue';
import MemberUpdate from '../components/MemberUpdate.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/board', component: BoardList },
  { path: '/board/:id', component: BoardDetail },
  { path: '/board/insert', component: BoardInsert },
  { path: '/board/update/:id', component: BoardUpdate },
  { path: '/qna', component: QnaList },
  { path: '/qna/:id', component: QnaDetail },
  { path: '/qna/insert', component: QnaInsert },
  { path: '/qna/update/:id', component: QnaUpdate },
  { path: '/dataroom', component: DataroomList },
  { path: '/dataroom/:id', component: DataroomDetail },
  { path: '/dataroom/insert', component: DataroomInsert },
  { path: '/dataroom/update/:id', component: DataroomUpdate },
  { path: '/product', component: ProductList },
  { path: '/product/:id', component: ProductDetail },
  { path: '/product/insert', component: ProductInsert },
  { path: '/product/update/:id', component: ProductUpdate },
  { path: '/member', component: MemberList },
  { path: '/member/:id', component: MemberDetail },
  { path: '/member/register', component: MemberRegister },
  { path: '/member/login', component: MemberLogin },
  { path: '/member/info', component: MemberInfo },
  { path: '/member/update/:id', component: MemberUpdate },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

<br><br>

#### 8-2-2-11. Member 관련 컴포넌트

**src/components/MemberList.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Member List</h1>
    <router-link to="/member/register" class="btn">Register New Member</router-link>
    <ul>
      <li v-for="member in members" :key="member.id">
        <router-link :to="'/member/' + member.id">{{ member.name }}</router-link>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'MemberList',
  components: { Header, Footer },
  data() {
    return {
      members: []
    };
  },
  async created() {
    const response = await apiClient.get('/members');
    this.members = response.data;
  }
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/MemberDetail.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Member Detail</h1>
    <div v-if="member">
      <h2>{{ member.name }}</h2>
      <p>{{ member.email }}</p>
      <router-link :to="'/member/update/' + member.id" class="btn">Edit</router-link>
      <button @click="deleteMember" class="btn">Delete</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'MemberDetail',
  components: { Header, Footer },
  data() {
    return {
      member: null
    };
  },
  async created() {
    const response = await apiClient.get(`/members/${this.$route.params.id}`);
    this.member = response.data;
  },
  methods: {
    async deleteMember() {
      await apiClient.delete(`/members/${this.$route.params.id}`);
      this.$router.push('/member');
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-red-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/MemberRegister.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Register New Member</h1>
    <form @submit.prevent="registerMember">
      <div class="mb-4">
        <label class="block mb-1">Name</label>
        <input v-model="name" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Email</label>
        <input v-model="email" type="email" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Password</label>
        <input v-model="password" type="password" class="border p-2 w-full" />
      </div>
      <button type="submit" class="btn">Register</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'MemberRegister',
  components: { Header, Footer },
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async registerMember() {
      await apiClient.post('/members', {
        name: this.name,
        email: this.email,
        password: this.password
      });
      this.$router.push('/member');
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-green-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/MemberLogin.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form @submit.prevent="loginMember">
      <div class="mb-4">
        <label class="block mb-1">Email</label>
        <input v-model="email" type="email" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Password</label>
        <input v-model="password" type="password" class="border p-2 w-full" />
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'MemberLogin',
  components: { Header, Footer },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async loginMember() {
      const response = await apiClient.post('/auth/login', {
        email: this.email,
        password: this.password
      });
      localStorage.setItem('token', response.data.token);
      this.$router.push('/member/info');
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/MemberInfo.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Member Info</h1>
    <div v-if="member">
      <h2>{{ member.name }}</h2>
      <p>{{ member.email }}</p>
      <router-link :to="'/member/update/' + member.id" class="btn">Edit</router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'MemberInfo',
  components: { Header, Footer },
  data() {
    return {
      member: null
    };
  },
  async created() {
    const response = await apiClient.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    this.member = response.data;
  }
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
</style>
```

<br>

**src/components/MemberUpdate.vue**

```vue
<template>
  <div>
    <Header />
    <h1 class="text-2xl font-bold mb-4">Update Member Info</h1>
    <form @submit.prevent="updateMember">
      <div class="mb-4">
        <label class="block mb-1">Name</label>
        <input v-model="name" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Email</label>
        <input v-model="email" type="email" class="border p-2 w-full" />
      </div>
      <button type="submit" class="btn">Update</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import apiClient from '../api';

export default {
  name: 'MemberUpdate',
  components: { Header, Footer },
  data() {
    return {
      name: '',
      email: ''
    };
  },
  async created() {
    const response = await apiClient.get(`/members/${this.$route.params.id}`);
    const member = response.data;
    this.name = member.name;
    this.email = member.email;
  },
  methods: {
    async updateMember() {
      await apiClient.put(`/members/${this.$route.params.id}`, {
        name: this.name,
        email: this.email
      });
      this.$router.push(`/member/${this.$route.params.id}`);
    }
  }
};
</script>

<style scoped>
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
</style>
```

