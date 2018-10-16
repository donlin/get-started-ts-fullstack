import { NestFactory, FastifyAdapter } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ApplicationModule } from './app.module';

const fastify = new FastifyAdapter();

async function bootstrap(httpServer: FastifyAdapter) {
  const app = await NestFactory.create(ApplicationModule, httpServer);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
}
bootstrap(fastify);
