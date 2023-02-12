import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { typeOrmConfig } from './configs/Typeorm.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors();
  const config = new DocumentBuilder()
  .setTitle('Fullstack App: Gamedev')
  .setDescription('Created by Yaroslav Popov (CEO, Fullstack),Alina Khudoliy(Frontend) Andrey Evseev(Backend)')
  .setVersion('1.0.0')
  .addTag('game-start')
  .build()
  const document=SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('/api/docs',app,document)
  await app.listen(process.env.PORT,()=>console.log(`Started on port ${process.env.PORT}`,typeOrmConfig))
}
bootstrap();
