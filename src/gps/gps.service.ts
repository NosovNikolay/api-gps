import {Inject, Injectable, OnModuleInit} from '@nestjs/common';
import {ClientGrpc} from "@nestjs/microservices";
import {Observable} from "rxjs";
import {GPSService, GPS, saveRes, DataArray} from "./GPSService";
import {DevicesService} from "../devices/devices.service";
import {CreateDataDto} from "./dto/create-data.dto";

@Injectable()
export class GpsService implements OnModuleInit {
    private GPSService: GPSService;

    constructor(@Inject('GPS') private readonly client: ClientGrpc,
                         private readonly devicesService: DevicesService) {
    }

    onModuleInit(): any {
        this.GPSService = this.client.getService<GPSService>('GpsController');
    }

    async saveGps(gps: CreateDataDto): Promise<Observable<saveRes>> {
        let device = await this.devicesService.getDeviceBySerial(gps.serialNum);
        let gpsData = null;
        if (device)
            gpsData = await this.GPSService.saveGPSData({
                deviceId : device.id,
                gpsData: gps.gpsData
            });
        return gpsData;
    }

    async getGpsData(gps: { serialNum: string }): Promise<Observable<DataArray>>{
        let device = await this.devicesService.getDeviceBySerial(gps.serialNum);
        let gpsData = null;
        if (device)
            gpsData = await this.GPSService.getGPSData({deviceId : device.id});
        return gpsData
    }
}
