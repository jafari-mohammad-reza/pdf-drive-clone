import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

export const ConfigModuleConf = ConfigModule.forRoot({
  isGlobal: true,
});
