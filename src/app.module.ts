import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UploadModule } from './modules/upload/upload.module';
import { DownloadModule } from './modules/download/download.module';
import { SearchModule } from './modules/search/search.module';
import { ConfigModuleConf } from './share/config/config-module.conf';
import {MongooseModuleConf, MongooseModuleEntitiesConf} from "./share/config/mongoose-module.conf";

@Module({
  imports: [
    ConfigModuleConf,
      MongooseModuleConf,
      MongooseModuleEntitiesConf,
    AuthModule,
    UploadModule,
    DownloadModule,
    SearchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
