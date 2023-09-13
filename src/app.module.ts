import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { APP_FILTER } from '@nestjs/core';

import { HttpExceptionFilter } from './http-exception.filter';

@Module({
  imports: [MenuModule, CategoryModule, ProductModule],
  controllers: [AppController],
  providers: [{
    provide: APP_FILTER,
    useClass: HttpExceptionFilter
  },
  AppService],
})
export class AppModule {}
