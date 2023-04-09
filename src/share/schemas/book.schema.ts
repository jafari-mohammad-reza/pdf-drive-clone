import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsArray, IsDate, IsEmpty, IsString } from 'class-validator';
import { HydratedDocument, Schema as SchemaTypes } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ type: SchemaTypes.Types.String, required: true, index: true })
  @IsString()
  title: string;
  @Prop({ type: SchemaTypes.Types.Date, required: false })
  @IsDate()
  @IsEmpty()
  publishDate?: Date;
  @Prop({ type: SchemaTypes.Types.String, required: false, index: true })
  @IsString()
  @IsEmpty()
  publisher?: string;
  @Prop({ type: [SchemaTypes.Types.ObjectId], default: [], ref: 'tags' })
  @IsArray()
  tags: SchemaTypes.Types.ObjectId[];
  @Prop({ type: SchemaTypes.Types.String, unique: true, required: true })
  uploadPath: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
