import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // ValidationPipe 설정
  app.useGlobalPipes(new ValidationPipe());

  // CORS 설정
  app.enableCors();

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('게시판 API')
    .setDescription('게시판 프로젝트의 API 문서')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3001);
}
bootstrap();
