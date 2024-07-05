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