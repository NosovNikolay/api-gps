import { Injectable } from '@nestjs/common';
import {Device} from "./devices.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateDeviceDto} from "./dto/create-device.dto";

@Injectable()
export class DevicesService {

    constructor(@InjectModel(Device) private deviceRepository: typeof Device) {
    }

    async createDevice(dto: CreateDeviceDto) {
        const device = await this.deviceRepository.create(dto);
        return device;
    }

    async

}
