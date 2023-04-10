import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadBook } from './dtos/upload-book.dto';
import { BookService } from './book.service';
import { PdfUploaderInterceptor } from 'src/share/interceptors/pdf-uploader.interceptor';
import { createReadStream } from 'fs';
import { Response } from 'express';
import { SearchBookDto } from './dtos/search-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Post('/upload')
  @UseInterceptors(PdfUploaderInterceptor)
  async uploadBook(
    @Body() uploadInput: UploadBook,
    @UploadedFile() file: Express.Multer.File,
  ) {
    await this.bookService.uploadBook(uploadInput, file.path);
    return 'Uploaded successfully.';
  }
  @Post('/download')
  async downloadBook(@Query('id') id: string, @Res() res: Response) {
    const path = await this.bookService.downloadBook({ id });
    res.status(200).download(path);
  }
  @Get('/search')
  async search(@Body() searchInput: SearchBookDto) {
    return await this.bookService.searchBook(searchInput);
  }
}
