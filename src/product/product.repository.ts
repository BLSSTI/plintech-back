import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto, ProductDto, UpdateProductDto } from './dto/product.dto';
import { PrismaService } from 'src/database/prisma.service';
import { CategoryRepository } from 'src/category/category.repository';


@Injectable()
export class ProductRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly categoryRepository: CategoryRepository
    ) { }
 

  async findAll(): Promise<ProductDto[]> {
    return await this.prismaService.getClient().product.findMany({
      include:{
        category: true
      }
    })
  }

  async findOne(id: string): Promise<ProductDto | null> {
    return await this.prismaService.getClient().product.findUnique({
      where: { id: String(id) },
    });
  }

  async create(data: CreateProductDto): Promise<ProductDto | null> {
    this.veryfyCategory(data.categoryId)
    return await this.prismaService.getClient().product.create({
      data,
    });
  }

  async update(id: string, data: UpdateProductDto): Promise<ProductDto | null> {
    this.veryfyCategory(data.categoryId)
    return await this.prismaService.getClient().product.update({
      where: { id: String(id) },
      data,
    });
  }

  async remove(id: string): Promise<ProductDto | null> {
    return await this.prismaService.getClient().product.delete({
      where: { id: String(id) },
    });
  }

  async veryfyCategory(id:string){
    let categoryId = await this.categoryRepository.findOne(id)
    if(!categoryId) {
      return new BadRequestException(`Cannot find category`);
    }

  }
}
