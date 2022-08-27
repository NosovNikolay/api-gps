import {Observable} from "rxjs";

export interface GPSService {
    safeGPSData(string: Message): Observable<Res>
}

export type Message = {
    data: string;
}

export type Res = {
    x: string
    y: string
}

