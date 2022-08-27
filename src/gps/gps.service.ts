import {Inject, Injectable, OnModuleInit} from '@nestjs/common';
import {ClientGrpc} from "@nestjs/microservices";
import {Observable} from "rxjs";
import {Res, GPSService} from "./GPSService";

@Injectable()
export class GpsService implements OnModuleInit{
    private GPSService: GPSService;

    constructor(@Inject('GPS') private readonly client: ClientGrpc) {}

    onModuleInit(): any {
        this.GPSService = this.client.getService<GPSService>('AppController');
    }

    getNum(): Observable<Res> {
        return this.GPSService.safeGPSData({
            data: '123'
        })
    }
}
