import {Controller, Get} from '@nestjs/common';
import {Observable} from "rxjs";
import {Res} from "./GPSService";
import {GpsService} from "./gps.service";

@Controller('gps')
export class GpsController {
    constructor(private readonly appService: GpsService) {
    }

    @Get('/num')
    getNum(): Observable<Res> {
        return this.appService.getNum()
    }
}