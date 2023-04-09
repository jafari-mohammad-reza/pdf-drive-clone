import {ConfigModule} from '@nestjs/config';
import * as Joi from 'joi';

export const ConfigModuleConf = ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
        DATABASE_URL: Joi.string()
    }),
});
