import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import { SeedModule } from 'db/seed/seed.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
      origin: 'http://localhost:5173', 
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      allowedHeaders: 'Content-Type,Authorization',
    });

  const seedModule = app.select(SeedModule); 
  await seedModule.get(SeedModule).SeedArtist();
  
  const config = new DocumentBuilder()
      .setTitle('Musion')
      .setDescription('The Musion API description')
      .setVersion('1.0')
      .addTag('Musion')
      .build();
      
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  
  await app.listen(3000);
}
bootstrap();
