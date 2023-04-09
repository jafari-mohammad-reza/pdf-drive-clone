import { IsString } from "class-validator";
import { Schema } from "mongoose";

export class DownloadBook { 
  @IsString()
  id:Schema.Types.ObjectId;
}
