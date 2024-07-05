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