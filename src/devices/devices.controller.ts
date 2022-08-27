import {Body, Controller, Post, Get, UseGuards} from '@nestjs/common';
import {DevicesService} from "./devices.service";
import {CreateDeviceDto} from "./dto/create-device.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Device} from "./devices.model";
import {JwtAuthGuard} from "../auth/jwt-auth-guard";

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


    @UseGuards(JwtAuthGuard)
    @Get('/test')
    get(@Body() deviceDto: CreateDeviceDto) {
        return "this.devicesService.createDevice(deviceDto)"
    }

}
