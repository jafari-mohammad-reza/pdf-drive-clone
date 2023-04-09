import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from '../schemas/book.schema';
import { Tag, TagSchema } from '../schemas/tag.schema';

export const MongooseModuleConf = MongooseModule.forRoot(
  'mongodb://localhost:27017/pdf-drive',
);

export const MongooseModuleEntitiesConf = MongooseModule.forFeature([
  { name: Book.name, schema: BookSchema },
  { name: Tag.name, schema: TagSchema },
]);
