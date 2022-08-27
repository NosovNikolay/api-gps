import {Column, DataType, Model, Table} from "sequelize-typescript";

interface DeviceCreationAtts {
    serialNum: string;
    password: string;
}
@Table({tableName: 'devices'})
export class Device extends Model<Device, DeviceCreationAtts> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    serialNum: string;
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
}