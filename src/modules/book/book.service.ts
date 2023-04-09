import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/share/schemas/book.schema';
import { UploadBook } from './dtos/upload-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private readonly bookModel :Model<Book>){}
async  uploadBook(uploadInput:UploadBook) : Promise<void> {}
async  downloadBook(uploadInput:UploadBook) : Promise<void> {}
async  searchBook(uploadInput:UploadBook) : Promise<void> {}
}
