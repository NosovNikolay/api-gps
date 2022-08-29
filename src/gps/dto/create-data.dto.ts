import {ApiProperty} from "@nestjs/swagger";
import {IsString, IsNotEmpty} from "class-validator";

export class CreateDataDto {
    @ApiProperty({example: "$GPGGA,224900.000,4832.,N,00903.5393,E,1,04,7.8,498.6,M,48.0,M,,0000*5E",
                        description: "Gps data"})
    @IsString()
    @IsNotEmpty()
    readonly gpsData: string

    @ApiProperty({example: 'DU182993FK',
        description: "Serial number"})
    @IsString()
    @IsNotEmpty()
    readonly serialNum: string
}
