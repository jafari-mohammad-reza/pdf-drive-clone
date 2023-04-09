import { PickType } from "@nestjs/mapped-types";
import { Book } from "src/share/schemas/book.schema";

export class UploadBook extends PickType(Book , ["title","publishDate","publisher","tags"]){}
