import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from './category.repository';



import { CategoryDto, CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { MenuRepository } from 'src/menu/menu.repository';
import { error } from 'console';


@Injectable()
export class CategoryService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly menuRepository: MenuRepository,
  ) {}

  async findAll(): Promise<CategoryDto[]> {
    return this.categoryRepository.findAll();
  }

  async findOne(id: string | number): Promise<CategoryDto> {
    return this.categoryRepository.findOne(id);
  }

  async create(data: CreateCategoryDto): Promise<CategoryDto> {
    await this.veryfyMenu(data.menuId)
    return this.categoryRepository.create(data);
  }

  async update(id: string | number, data: UpdateCategoryDto): Promise<CategoryDto> {
      await this.veryfyMenu(data.menuId)
      return this.categoryRepository.update(id, data);
  }

  async remove(id: string | number): Promise<CategoryDto> {
    return this.categoryRepository.remove(id);
  }
  async veryfyMenu(id: string){
      let menu = await this.menuRepository.findOne(id)
      if(!menu){
        throw new NotFoundException("Menu not found")
      }
      return true;
    
 }
}