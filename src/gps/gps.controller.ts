import {Body, Controller, Get, Post, Param, UseGuards} from '@nestjs/common';
import {Observable} from "rxjs";
import {DataArray, saveRes} from "./GPSService";
import {GpsService} from "./gps.service";
import {JwtAuthGuard} from "../auth/jwt-auth-guard";
import {CreateDataDto} from "./dto/create-data.dto";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
@ApiTags('GPS')
@Controller('gps')
export class GpsController {
    constructor(private readonly gpsService: GpsService) {
    }

    @Post('/saveData')
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, description: "Parsed GPS data"})
    saveData(@Body() gps: CreateDataDto): Promise<Observable<saveRes>> {
        return this.gpsService.saveGps(gps)
    }

    @Get('/getData/:serialNum')
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, description: "Parsed GPS data array"})
    getGPSData(@Param() params: { serialNum: string }): Promise<Observable<DataArray>> {
        return this.gpsService.getGpsData({serialNum: params.serialNum})
    }
}