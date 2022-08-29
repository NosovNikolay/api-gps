import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';
import {ValidationPipe} from '../src/pipes/validation.pipe'
import * as request from 'supertest';
import {AppModule} from './../src/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe())
        await app.init();
    });

    it('/auth/registration (POST)', () => {
        return request(app.getHttpServer())
            .post('/auth/registration')
            .send({
                "serialNum": "qwertyu",
                "password": "1"
            })
            .expect(400)
            .expect([
                "password - Minimal length is 4, maximal is 16"
            ]);
    });

    it('/auth/registration (POST)', () => {
        return request(app.getHttpServer())
            .post('/auth/registration')
            .send({
                "serialNum": "qwertyu",
                "password": 124357423876
            })
            .expect(400)
            .expect([
                "password - Minimal length is 4, maximal is 16, Should be string"
            ]);
    });

    // Need to create User with this params;

    it('/auth/login (POST)', () => {
        return request(app.getHttpServer())
            .post('/auth/login')
            .send({
                "serialNum": "qwerty",
                "password": "124357423876"
            })
            .expect(201)
    });

    it('/gps/saveData (POST)', () => {
        return request(app.getHttpServer())
            .post('/gps/saveData')
            .send({
                "deviceId": 7,
                "gpsData": "$GPGGA,224900.000,4832.,N,00903.5393,E,1,04,7.8,498.6,M,48.0,M,,0000*5E"
            })
            .expect(401)
    });

    // Add more tests, but with token
});
