import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CategoryRepository } from './category.repository';
import { MenuRepository } from 'src/menu/menu.repository';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService,PrismaService, CategoryRepository, MenuRepository],
})
export class CategoryModule {}
