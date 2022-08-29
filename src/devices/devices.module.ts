import {forwardRef, Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {DevicesService} from './devices.service';
import {DevicesController} from './devices.controller';
import {Device} from "./devices.model";
import {AuthModule} from "../auth/auth.module";

@Module({
    providers: [DevicesService],
    controllers: [DevicesController],
    imports: [
        SequelizeModule.forFeature([Device]),
        forwardRef(() => AuthModule),
    ],
    exports: [
        DevicesService,
    ]

})
export class DevicesModule {
}
