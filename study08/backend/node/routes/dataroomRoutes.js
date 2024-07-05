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
