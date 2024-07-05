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
