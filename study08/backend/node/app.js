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