import {Body, Controller, Get, Post, Param, UseGuards} from '@nestjs/common';
import {Observable} from "rxjs";
import {DataArray, DataCreationAttr, saveRes,} from "./GPSService";
import {GpsService} from "./gps.service";
import {JwtAuthGuard} from "../auth/jwt-auth-guard";
import {DevicesService} from "../devices/devices.service";

@Controller('gps')
export class GpsController {
    constructor(private readonly gpsService: GpsService,
                private readonly devicesService: DevicesService) {
    }

    @Post('/saveData')
    @UseGuards(JwtAuthGuard)
    saveData(@Body() gps: DataCreationAttr): Observable<saveRes> {
        return this.gpsService.saveGps(gps)
    }

    @Get('/getData/:serialNum')
    @UseGuards(JwtAuthGuard)
    async getGPSData(@Param() params: { serialNum: string }): Promise<Observable<DataArray>> {
        let device = await this.devicesService.getDeviceBySerial(params.serialNum);
        let gpsData = null;
        if (device)
            gpsData = await this.gpsService.getGpsData({deviceId: device.id})
        return gpsData;
    }
}