import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {  join } from 'path';
;
import { NestExpressApplication } from '@nestjs/platform-express';
import * as nunjucks from 'nunjucks';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const express = app.getHttpAdapter().getInstance();
  const views = join(__dirname, '..', 'views');

  nunjucks.configure(views, { express }); 


  const staticAssets = join(__dirname, '..', 'views', 'css'); 
  app.useStaticAssets(staticAssets);



  await app.listen(3000);
  console.log(`App is running on ${await(app.getUrl())}`)
}
bootstrap();






