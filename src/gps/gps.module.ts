import {forwardRef, Module} from '@nestjs/common';
import { GpsService } from './gps.service';
import { GpsController } from './gps.controller';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";
import {AuthModule} from "../auth/auth.module";

@Module({
  providers: [GpsService],
  controllers: [GpsController],
  imports: [
    forwardRef(() => AuthModule),
    ClientsModule.register([
      {
        name: 'GPS',
        transport: Transport.GRPC,
        options: {
          url: "0.0.0.0:50051",
          package: 'GPS',
          protoPath: join(__dirname, '../../proto/gps.proto'),
        },
      },
    ]),
  ],
})
export class GpsModule {}
