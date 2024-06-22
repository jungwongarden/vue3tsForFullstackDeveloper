const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/upload', upload.single('file'), (req, res) => {
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, 'public/assets/upload', req.file.originalname);

  fs.rename(tempPath, targetPath, err => {
    if (err) return res.status(500).json({ success: false });

    res.json({ success: true });
  });
});

app.post('/update-file/:filename', upload.single('file'), (req, res) => {
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, 'public/assets/upload', req.file.originalname);
  const oldFilePath = path.join(__dirname, 'public/assets/upload', req.params.filename);

  fs.rename(tempPath, targetPath, err => {
    if (err) return res.status(500).json({ success: false });

    fs.unlink(oldFilePath, unlinkErr => {
      if (unlinkErr) return res.status(500).json({ success: false });

      res.json({ success: true });
    });
  });
});

app.delete('/delete-file/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'public/assets/upload', req.params.filename);

  fs.unlink(filePath, err => {
    if (err) return res.status(500).json({ success: false });

    res.json({ success: true });
  });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});