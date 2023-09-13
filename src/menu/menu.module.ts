import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { PrismaService } from 'src/database/prisma.service';
import { MenuRepository } from './menu.repository';

@Module({
  controllers: [MenuController],
  providers: [MenuService, PrismaService, MenuRepository],
})
export class MenuModule {}
