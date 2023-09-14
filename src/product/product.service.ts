import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDto, ProductDto, UpdateProductDto } from './dto/product.dto';
import { CategoryRepository } from 'src/category/category.repository';
import { CategoryDto } from 'src/category/dto/category.dto';

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository
  ) {}

  async findAll(): Promise<CategoryDto[]> {
    return this.categoryRepository.findAllWithProducts();
  }

  async findOne(id: string): Promise<ProductDto | null> {
    return this.productRepository.findOne(id);
  }

  async create(data: CreateProductDto): Promise<ProductDto> {
    this.veryfyCategory(data.categoryId)
    return this.productRepository.create(data);
  }

  async update(id: string, data: UpdateProductDto): Promise<ProductDto | null> {
    this.veryfyCategory(data.categoryId)
    return this.productRepository.update(id, data);
  }

  async remove(id: string): Promise<ProductDto | null> {
    return this.productRepository.remove(id);
  }

  async veryfyCategory(id: string){
     let category = this.categoryRepository.findOne(id)
     if(!category){
      throw new NotFoundException("category not found")
     }
     return true;
  }
  
}
