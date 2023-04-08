import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {HydratedDocument, Schema as SchemaType} from "mongoose";
export type TagDocument =HydratedDocument<Tag>;
@Schema()
export class Tag {
    @Prop({type:SchemaType.Types.String , required:true , index:true})
    title:String;
}
export const TagSchema = SchemaFactory.createForClass(Tag);