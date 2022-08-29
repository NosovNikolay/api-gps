import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {AppModule} from './app.module';
import {ValidationPipe} from "./pipes/validation.pipe";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('GPS Gateway API')
        .setDescription('Documentation')
        .setVersion('1.0.0')
        .addTag('Nosov Mykola')
        .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
    app.useGlobalPipes(new ValidationPipe())
    await app.listen(process.env.PORT || 3000);

}

bootstrap();
