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

   findAll(): Promise<CategoryDto[]> {
    return this.categoryRepository.findAll();
  }

   findOne(id: string): Promise<CategoryDto> {
    return this.categoryRepository.findOne(id);
  }

   create(data: CreateCategoryDto): Promise<CategoryDto> {
     this.veryfyMenu(data.menuId)
    return this.categoryRepository.create(data);
  }

   update(id: string, data: UpdateCategoryDto): Promise<CategoryDto> {
       this.veryfyMenu(data.menuId)
      return this.categoryRepository.update(id, data);
  }

   remove(id: string): Promise<CategoryDto> {
    return this.categoryRepository.remove(id);
  }
  async veryfyMenu(id: string){
      let menu =  this.menuRepository.findOne(id)
      if(!menu){
        throw new NotFoundException("Menu not found")
      }
      return true;
    
 }
}