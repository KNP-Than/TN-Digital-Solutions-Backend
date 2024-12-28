import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import config from './config';

async function bootstrap() {
  const logger = new Logger('App Service');
  const { port } = config();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(port);
  logger.verbose(`Server listening on port ${port}`);
}
bootstrap();
