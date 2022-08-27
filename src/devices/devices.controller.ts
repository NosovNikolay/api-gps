import {Body, Controller, Post} from '@nestjs/common';
import {DevicesService} from "./devices.service";
import {CreateDeviceDto} from "./dto/create-device.dto";

@Controller('devices')
export class DevicesController {
    constructor(private devicesService: DevicesService) {
    }

    @Post('')
    create(@Body() deviceDto: CreateDeviceDto) {
        return this.devicesService.createDevice(deviceDto)
    }

}
