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