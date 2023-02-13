import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

import AppModule from './application.module';

async function bootstrap() {
  const server = await NestFactory.create(AppModule);

  server.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('nest-next-monorepo-quickstart')
    .setDescription('nest.js + next.js + yarn workspace(berry) + swagger')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(server, config);

  SwaggerModule.setup('api', server, document);

  await server.listen(3000);
}

bootstrap();
