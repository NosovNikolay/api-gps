import {Controller, Get, UseGuards, Param} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {DevicesService} from "./devices.service";
import {Device} from "./devices.model";
import {JwtAuthGuard} from "../auth/jwt-auth-guard";

@ApiTags('Devices')
@Controller('devices')
export class DevicesController {
    constructor(private devicesService: DevicesService) {
    }

    @ApiOperation({summary: 'Find device by serial number'})
    @ApiResponse({status: 200, type: Device})
    @UseGuards(JwtAuthGuard)
    @Get('/getDevice/:serialNum')
    getDeviceBySerial(@Param() params: { serialNum: string }) {
        return this.devicesService.getDeviceBySerial(params.serialNum)
    }

}
