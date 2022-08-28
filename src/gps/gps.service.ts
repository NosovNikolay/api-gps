import {Inject, Injectable, OnModuleInit} from '@nestjs/common';
import {ClientGrpc} from "@nestjs/microservices";
import {Observable} from "rxjs";
import {Res, GPSService} from "./GPSService";

@Injectable()
export class GpsService implements OnModuleInit{
    private GPSService: GPSService;

    constructor(@Inject('GPS') private readonly client: ClientGrpc) {}

    onModuleInit(): any {
        console.log(this.client.getService<GPSService>('GpsController'))
        this.GPSService = this.client.getService<GPSService>('GpsController');
    }

    getNum(): Observable<Res> {
        return this.GPSService.safeGPSData({
            data: "$GPGGA,224900.000,4832.3762,N,00903.5393,E,1,04,7.8,498.6,M,48.0,M,,0000*5E"
        })
    }
}
