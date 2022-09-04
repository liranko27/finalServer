import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import { ProductsController } from './products/products.controller';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './customers/customer.entity';
import { ConfigModule } from '@nestjs/config'
import { ProductsModule } from './products/products.module';
import { Products } from './products/product.entity';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { Orders } from './orders/orders.entity';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    entities: [Customers, Products, Orders],
    synchronize: false
  }), CustomersModule, ProductsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
