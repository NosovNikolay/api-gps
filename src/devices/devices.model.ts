import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface DeviceCreationAtts {
    serialNum: string;
    password: string;
}
@Table({tableName: 'devices'})
export class Device extends Model<Device, DeviceCreationAtts> {
    @ApiProperty({example: '1', description: 'Unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'DU182993FK', description: 'Serial device number'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    serialNum: string;

    @ApiProperty({example: 'qwerty', description: 'Password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
}