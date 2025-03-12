import multer from 'multer';
import path from 'path';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import fs from 'fs';
import config from '../app/config';

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

cloudinary.config({
  cloud_name: config.cloudinary_cloud_name,
  api_key: config.cloudinary_api_key,
  api_secret: config.cloudinary_api_secret,
});

export const uploadToCloudinary = (
  imageNamne: string,
  path: string,
): Promise<Record<string, unknown>> => {
  return new Promise((resolve, rejects) => {
    cloudinary.uploader.upload(
      path,
      { public_id: imageNamne.trim() },
      (error, result) => {
        fs.unlinkSync(path);
        if (error) {
          rejects(error);
        }
        resolve(result as UploadApiResponse);
      },
    );
  });
};
