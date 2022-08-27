import {Body, Controller, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CreateDeviceDto} from "../devices/dto/create-device.dto";
import {AuthService} from "./auth.service";


@ApiTags('Authentication')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post('login')
    login (@Body() deviceDto: CreateDeviceDto) {
        return this.authService.login(deviceDto)
    }

    @Post('registration')
    registration (@Body() deviceDto: CreateDeviceDto) {
        return this.authService.registration(deviceDto)
    }

}
