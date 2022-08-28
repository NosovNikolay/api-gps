import {Body, Controller, Get, Post, Param, UseGuards} from '@nestjs/common';
import {Observable} from "rxjs";
import {DataCreationAttr, GPS, } from "./GPSService";
import {GpsService} from "./gps.service";
import {JwtAuthGuard} from "../auth/jwt-auth-guard";

@Controller('gps')
export class GpsController {
    constructor(private readonly gpsService: GpsService) {}

    @Post('/saveData')
    @UseGuards(JwtAuthGuard)
    saveData(@Body() gps: DataCreationAttr): Observable<{ data: GPS }> {
        return this.gpsService.saveGps(gps)
    }
1
    @Get('/getData/:deviceId')
    @UseGuards(JwtAuthGuard)
    getGPSData(@Param() params: { deviceId: number }): Observable<{data: GPS[]}> {
        return this.gpsService.getGpsData(params)
    }
}