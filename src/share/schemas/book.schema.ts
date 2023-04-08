import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as SchemaTypes } from "mongoose";
import {Tag} from "./tag.schema";

export type BookDocument = HydratedDocument<Book>;
@Schema()
export class Book {
  @Prop({ type: SchemaTypes.Types.String, required: true,index:true })
  title: String;
  @Prop({type :SchemaTypes.Types.Date , required:true })
  publishDate:Date;
  @Prop({type: SchemaTypes.Types.String, required: true,index:true})
  publisher:string;
  @Prop({type: [SchemaTypes.Types.ObjectId] , default:[],ref:"tags"})
  tags:Tag[];
}
export const BookSchema = SchemaFactory.createForClass(Book);
