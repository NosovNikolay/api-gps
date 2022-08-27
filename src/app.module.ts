import { Module } from '@nestjs/common';
import { GpsModule } from './gps/gps.module';
import { AuthModule } from "./auth/auth.module";
import {SequelizeModule} from "@nestjs/sequelize";
import { DevicesModule } from './devices/devices.module';
import {Device} from "./devices/devices.model";

@Module({
  imports: [
    AppModule,
    GpsModule,
    AuthModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'gps',
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
