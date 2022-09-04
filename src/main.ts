import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from 'mysql2'
export const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'L1230',
  database: 'shopping_db'
})

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
