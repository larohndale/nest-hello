import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { resolve } from 'path';

async function bootstrap() {
  const APP_DIRECTORY = resolve(__dirname, '..');
  const app = await NestFactory.create<any>(AppModule);

  app.setViewEngine('hbs');

  app.setBaseViewDir(resolve(APP_DIRECTORY, 'views'));
  app.useStaticAssets(resolve(APP_DIRECTORY, 'public'));

  await app.listen(3000);
}
bootstrap();
