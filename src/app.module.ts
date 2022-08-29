import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {GpsModule} from './gps/gps.module';
import {AuthModule} from "./auth/auth.module";
import {DevicesModule} from './devices/devices.module';
import {Device} from "./devices/devices.model";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        AppModule,
        GpsModule,
        AuthModule,
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database:  process.env.POSTGRES_DB,
            models: [Device],
            autoLoadModels: true
        }),
        DevicesModule,
    ],
    controllers: [],
    providers: [],
})

export class AppModule {
}
