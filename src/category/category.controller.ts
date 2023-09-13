import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, HttpException, HttpStatus, ForbiddenException } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';


@Controller('category')
@ApiTags('Category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post()
  @ApiOperation({ summary: 'Criar uma nova categoria' })
  @ApiBody({ type: CreateCategoryDto })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      return this.categoryService.create(createCategoryDto);
    } catch (error) {
      console.log(error.message);
    }

  }

  @Get()
  @ApiOperation({ summary: 'Obter todas as categorias' })
  findAll() {
    try {
      return this.categoryService.findAll();
    } catch (error) {
      console.log(error.message);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma categoria pelo ID' })
  @ApiParam({ name: 'id', type: 'string' })
  findOne(@Param('id') id: string) {
    try {
      return this.categoryService.findOne(id);
    } catch (error) {
      console.log(error.message);
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma categoria pelo ID' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiBody({ type: UpdateCategoryDto })
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    try {
      return this.categoryService.update(id, updateCategoryDto);
    } catch (error) {
      console.log(error.message);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir uma categoria pelo ID' })
  @ApiParam({ name: 'id', type: 'string' })
  remove(@Param('id') id: string) {
    try {
      return this.categoryService.remove(id);
    } catch (error) {
      console.log(error.message);
    }
  }
}
