import { Module } from '@nestjs/common';
import { ConfigModuleConf } from './share/config/config-module.conf';
import {
  MongooseModuleConf,
  MongooseModuleEntitiesConf,
} from './share/config/mongoose-module.conf';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [
    ConfigModuleConf,
    MongooseModuleConf,
    MongooseModuleEntitiesConf,
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
