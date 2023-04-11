import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService:TagService){}
 @Post()
  async createTag(@Body("title") title:string) {
    return await this.tagService.createTag(title)
  }

 @Get()
async getBooksByTag(@Param("title") title:string) {
    return await this.tagService.getBooksByTag(title)
  }
}
