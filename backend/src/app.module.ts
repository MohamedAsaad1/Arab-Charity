import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { OrganizationsModule } from './organizations/organizations.module';
import { PackagesModule } from './packages/packages.module';
import { APP_FILTER } from '@nestjs/core';
import { InventoryModule } from './inventory/inventory.module';
import { CastErrorExceptionFilter } from './filters/cast-error.filter';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: 'development.env',
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
        dbName: process.env.DBNAME,
      }),
    }),
    AuthModule,
    UsersModule,
    OrganizationsModule,
    PackagesModule,
    InventoryModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: CastErrorExceptionFilter,
    },
  ],
})
export class AppModule {}
