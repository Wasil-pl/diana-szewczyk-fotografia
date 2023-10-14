import { diskStorage } from 'multer';

export const multerOptions = {
  limits: { fileSize: 1024 * 1024 * 5 },
  storage: diskStorage({
    destination: './public/uploads/images',
    filename: (req, file, cb) => {
      file.originalname = file.originalname;
      cb(null, file.originalname);
    },
  }),
};
