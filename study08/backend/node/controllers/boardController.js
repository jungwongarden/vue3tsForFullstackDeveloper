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
