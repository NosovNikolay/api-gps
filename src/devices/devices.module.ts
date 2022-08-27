import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import {Device} from "./devices.model";

@Module({
  providers: [DevicesService],
  controllers: [DevicesController],
  imports: [
      SequelizeModule.forFeature([Device])
  ]
})
export class DevicesModule {}
