import {Observable} from "rxjs";

export interface GPSService {
    saveGPSData(string: DataCreationAttr): Observable<saveRes>
    getGPSData(string: { deviceId: number }): Observable<DataArray>
}

export type saveRes = {
    data: string;
    error: string[];
    status: number;
}

export type DataCreationAttr = {
    gpsData: string;
    deviceId: number
}

export type DataArray = {
    data: GPS[]
    error: string[];
    status: number;
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
