import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/share/schemas/book.schema';
import { Tag } from 'src/share/schemas/tag.schema';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag.name) private readonly tagModel :Model<Tag>){}
  async createTag(title:string):Promise<Tag>{
    return await this.tagModel.create({title})
  }
  async getBooksByTag(tagTitle:string):Promise<Book[]>{
    return this.tagModel.findOne({title:tagTitle}).populate("books")
  }

}
