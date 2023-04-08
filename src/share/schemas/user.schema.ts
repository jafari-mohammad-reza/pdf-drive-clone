import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId, Schema as SchemaType } from 'mongoose';
import {Book} from "./book.schema";
export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop({
    type: SchemaType.Types.String,
    required: true,
    unique: true,
    index: true,
  })
  email: string;
  @Prop({ type: SchemaType.Types.String, required: true })
  password: string;
  @Prop({ type: [SchemaType.Types.ObjectId], default: [], ref: 'books' })
  uploadedBooks: Book[];
}
export const UserSchema = SchemaFactory.createForClass(User);
