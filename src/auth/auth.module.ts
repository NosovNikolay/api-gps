import {forwardRef, Module} from '@nestjs/common';
import {JwtModule} from "@nestjs/jwt";
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {DevicesModule} from "../devices/devices.module";

@Module({
    providers: [AuthService],
    controllers: [AuthController],
    imports: [
        forwardRef(() => DevicesModule),
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || 'SECRET',
            signOptions: {
                expiresIn: '24h'
            }
        })
    ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {
}
