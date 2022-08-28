import {Observable} from "rxjs";

export interface GPSService {
    saveGPSData(string: DataCreationAttr): Observable<{data: GPS}>
    getGPSData(string: { deviceId: number }): Observable<{data: GPS[]}>
}

export type DataCreationAttr = {
    gpsData: string;
    deviceId: number
}

export type GPS = {
    id: number;
    deviceId: number;
    lat: number;
    lon: number;
    alt: number;
    quality: string;
    satellites: number;
    hdop: number;
    geoidal: number;
    age: number;
    stationID: number;
    raw: string;
    type: string;
    createdAt: Date;
}



