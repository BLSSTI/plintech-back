import { Injectable } from '@nestjs/common';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'src/database/prisma.service';
import { CreateMenuDto, MenuDto } from './dto/menu.dto';

@Injectable()
export class MenuRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async findAll(): Promise<MenuDto[]> {
    return await this.prismaService.getClient().menu.findMany();
  }

  async findByPeriod(period: string): Promise<MenuDto> {
    return await this.prismaService.getClient().menu.findFirst({
      where: {
        name: period
      },
      include: {
        categories: {
          include: {
            products: true,
          },
        },
      },
    });
  }
  async findOne(id: string | number): Promise<MenuDto | null> {
    return await this.prismaService.getClient().menu.findUnique({
      where: { id: String(id) },
    });
  }

  async create(data: CreateMenuDto): Promise<MenuDto> {
    return await this.prismaService.getClient().menu.create({
      data,
    });
  }

  async update(id: string | number, data: UpdateMenuDto): Promise<MenuDto | null> {
    return await this.prismaService.getClient().menu.update({
      where: { id: String(id) },
      data,
    });
  }

  async remove(id: string | number): Promise<MenuDto | null> {
    return await this.prismaService.getClient().menu.delete({
      where: { id: String(id) },
    });
  }
}
