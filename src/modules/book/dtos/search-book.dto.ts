import { PartialType } from '@nestjs/mapped-types';
import { Book } from 'src/share/schemas/book.schema';
export class SearchBookDto extends PartialType(Book) {}
