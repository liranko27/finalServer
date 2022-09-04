import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import { ProductsController } from './products/products.controller';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './customers/customer.entity';
import { ConfigModule } from '@nestjs/config'
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    entities: [Customers],
    synchronize: false
  }), CustomersModule],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule { }
