import {Inject, Injectable, OnModuleInit} from '@nestjs/common';
import {ClientGrpc} from "@nestjs/microservices";
import {Observable} from "rxjs";
import { GPSService, DataCreationAttr, GPS} from "./GPSService";

@Injectable()
export class GpsService implements OnModuleInit{
    private GPSService: GPSService;

    constructor(@Inject('GPS') private readonly client: ClientGrpc) {}

    onModuleInit(): any {
        this.GPSService = this.client.getService<GPSService>('GpsController');
    }

    saveGps(gps: DataCreationAttr): Observable<{data: GPS}> {
        return this.GPSService.saveGPSData(gps)
    }

    getGpsData(gps: { deviceId: number }): Observable<{data: GPS[]}> {
        return this.GPSService.getGPSData(gps)
    }
}
