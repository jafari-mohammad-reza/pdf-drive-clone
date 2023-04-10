import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsArray,
  IsDate,
  IsDateString,
  IsEmpty,
  IsString,
} from 'class-validator';
import { HydratedDocument, Schema as SchemaTypes } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ type: SchemaTypes.Types.String, required: true, index: true })
  @IsString()
  title: string;
  @Prop({ type: SchemaTypes.Types.Date, required: false })
  publishDate?: Date;
  @Prop({ type: SchemaTypes.Types.String, required: false })
  publisher?: string;
  @Prop({ type: [SchemaTypes.Types.ObjectId], default: [], ref: 'tags' })
  tags: SchemaTypes.Types.ObjectId[];
  @Prop({ type: SchemaTypes.Types.String, unique: true, required: true })
  uploadPath: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
