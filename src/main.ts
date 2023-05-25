import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  const options: SecuritySchemeObject = {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    name: 'JWT Authentication',
    description: 'Put **_ONLY_** your JWT Bearer token on textbox below!',
    in: 'header',
  }

  const config = new DocumentBuilder()
    .setTitle('Servicio de Estadisticas')
    .setDescription('Servicio que provee datos de estadisticas')
    .setVersion('1.0')
    .setBasePath('/api')
    .addBearerAuth(options,'Bearer')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
