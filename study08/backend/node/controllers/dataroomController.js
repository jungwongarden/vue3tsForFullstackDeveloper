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
