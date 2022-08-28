import {ApiProperty} from "@nestjs/swagger";
import {IsString, Length} from "class-validator";
export class CreateDeviceDto {
    @ApiProperty({example: 'DU182993FK', description: 'Serial device number'})
    @IsString({message: 'Should be string'})
    readonly serialNum: string;
    @IsString({message: 'Should be string'})
    @Length(4, 16, {message: 'Minimal length is 4, maximal is 16'})
    @ApiProperty({example: 'qwerty', description: 'Password'})
    readonly password: string
}
