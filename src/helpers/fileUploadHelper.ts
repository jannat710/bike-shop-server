import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    console.log(file);
    const fileExtension = path.extname(file.originalname);

    const fileName =
      file.originalname
        .replace(fileExtension, '')
        .toLowerCase()
        .split(' ')
        .join('-') +
      Date.now() +
      '-';
    cb(null, fileName + fileExtension);
  },
});
export const upload = multer({ storage: storage });
