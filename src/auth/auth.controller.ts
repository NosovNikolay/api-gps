import {Body, Controller, Post} from '@nestjs/common';
import {ApiTags, ApiResponse} from "@nestjs/swagger";
import {CreateDeviceDto} from "../devices/dto/create-device.dto";
import {AuthService} from "./auth.service";
import {Device} from "../devices/devices.model";

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post('login')
    @ApiResponse({status: 200, description: "Auth token"})
    login(@Body() deviceDto: CreateDeviceDto) {
        return this.authService.login(deviceDto)
    }

    @Post('registration')
    @ApiResponse({status: 200, type: Device, description: "New Device"})
    registration(@Body() deviceDto: CreateDeviceDto) {
        return this.authService.registration(deviceDto)
    }

}
