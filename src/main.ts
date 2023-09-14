import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './database/prisma.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.get(PrismaService)

  if(process.env.NODE_ENV !== 'production') {
  const config = new DocumentBuilder()
    .setTitle('Plintech Api')
    .setDescription('Plintech Api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document)
}
  await app.listen(3000);
}
bootstrap();
