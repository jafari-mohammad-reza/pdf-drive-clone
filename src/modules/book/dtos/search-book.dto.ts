import {OmitType} from "@nestjs/mapped-types"
import { Book } from "src/share/schemas/book.schema";
export class SearchBookDto extends OmitType(Book , ["title","publisher","publishDate","tags"]) { 

}
