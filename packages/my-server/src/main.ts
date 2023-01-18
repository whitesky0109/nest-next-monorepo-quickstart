import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './application.module';
import { ViewAuthFilter } from './filters/ViewAuthFilter';

async function bootstrap() {
  const server = await NestFactory.create(AppModule);

  server.useGlobalFilters(new ViewAuthFilter());

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
