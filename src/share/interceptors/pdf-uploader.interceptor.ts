import { BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

export const PdfUploaderInterceptor = FileInterceptor('file', {
  storage: diskStorage({
    destination: join(__dirname, '..', '..', '..', 'public', 'uploads'),
    filename: (req, file, cb) => {
      if (file.mimetype !== 'application/pdf') {
        return cb(new BadRequestException('Only PDF files are allowed.'), null);
      }

      // Generating a 32 random chars long string
      const randomName =
        req.body.title +
        Array(32)
          .fill(null)
          .map(() => Math.round(Math.random() * 16).toString(16))
          .join('');
      //Calling the callback passing the random name generated with the original extension name
      cb(null, `${randomName}${extname(file.originalname)}`);
    },
  }),
  limits: {
    fileSize: 10000000, // 10 MB limit
  },
});
