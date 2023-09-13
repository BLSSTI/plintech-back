import { PrismaService } from '../database/prisma.service';
import { Injectable } from '@nestjs/common';
import { CategoryDto, CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';


@Injectable()
export class CategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<CategoryDto[]> {
    return await this.prismaService.getClient().category.findMany()
  }

  async findAllWithProducts(): Promise<CategoryDto[]> {
    return await this.prismaService.getClient().category.findMany({
      include: {
        products:true
      }
    });
  }
  async findOne(id: string | number): Promise<CategoryDto | null> {
    return await this.prismaService.getClient().category.findUnique({
      where: { id: String(id) },
      include:{
        products: true
      }
    });
  }

  async create(data: CreateCategoryDto): Promise<CategoryDto> {
    return await this.prismaService.getClient().category.create({
      data,
    });
  }

  async update(id: string | number, data: UpdateCategoryDto): Promise<CategoryDto | null> {
    return await this.prismaService.getClient().category.update({
      where: { id: String(id) },
      data,
    });
  }

  async remove(id: string | number): Promise<CategoryDto | null> {
    return await this.prismaService.getClient().category.delete({
      where: { id: String(id) },
    });
  }
}
