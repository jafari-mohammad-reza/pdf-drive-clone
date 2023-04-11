import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, Schema } from 'mongoose';
import { Book } from 'src/share/schemas/book.schema';
import { DownloadBook } from './dtos/download-book.dto';
import { SearchBookDto } from './dtos/search-book.dto';
import { UploadBook } from './dtos/upload-book.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}
  async uploadBook(uploadInput: UploadBook, uploadPath: string): Promise<void> {
    await this.bookModel.create({ ...uploadInput, uploadPath });
  }
  async downloadBook(downloadInput: DownloadBook): Promise<string> {
    const { id } = downloadInput;
    const existBook = this.bookModel.findOne({
      _id: id,
    });
    if (!existBook) throw new NotFoundException('Book not found');
    return (await existBook).uploadPath;
  }
  async searchBook({ title }: SearchBookDto): Promise<Book[]> {
    console.log(title);
    return this.bookModel.find({
      title
    });
  }
}
