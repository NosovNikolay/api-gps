import {Body, Controller, Post} from '@nestjs/common';
import {DevicesService} from "./devices.service";
import {CreateDeviceDto} from "./dto/create-device.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Device} from "./devices.model";

@ApiTags('Devices')
@Controller('devices')
export class DevicesController {
    constructor(private devicesService: DevicesService) {
    }
    @ApiOperation({summary: 'Creating new GPS device'})
    @ApiResponse({status: 200, type: Device})
    @Post('')
    create(@Body() deviceDto: CreateDeviceDto) {
        return this.devicesService.createDevice(deviceDto)
    }

}
