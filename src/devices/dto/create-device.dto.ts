import {ApiProperty} from "@nestjs/swagger";

export class CreateDeviceDto {

    @ApiProperty({example: 'DU182993FK', description: 'Serial device number'})
    readonly serialNum: string;

    @ApiProperty({example: 'qwerty', description: 'Password'})
    readonly password: string
}