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