import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateDeviceDto} from "../devices/dto/create-device.dto";
import {DevicesService} from "../devices/devices.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcryptjs"
import {Device} from "../devices/devices.model";

@Injectable()
export class AuthService {

    constructor(private deviceService: DevicesService,
                private jwtService: JwtService) {
    }

    async login( deviceDto: CreateDeviceDto) {
        const device = await this.validateDevice(deviceDto);
        return this.generateToken(device);
    }

    async registration (deviceDto: CreateDeviceDto) {
        const candidate = await this.deviceService.getDeviceBySerial(deviceDto.serialNum);
        if (candidate)
            throw new HttpException('Device already exist', HttpStatus.BAD_REQUEST);

        const hashPassword = await bcrypt.hash(deviceDto.password, 10);
        const device = await this.deviceService.createDevice({...deviceDto, password: hashPassword});
        return this.generateToken(device);
    }

    private async generateToken(device: Device) {
        const payload = {serialNum: device.serialNum, id: device.id}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateDevice(deviceDto: CreateDeviceDto) {
        const device = await this.deviceService.getDeviceBySerial(deviceDto.serialNum);
        const passwordEquals = await bcrypt.compare(deviceDto.password, device?.password || '');
        if (device && passwordEquals)
            return device;
        throw new UnauthorizedException({status: 400,message: 'Wrong serial or password'});
 ;   }
}
