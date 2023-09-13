import { Get, Controller, Post, Body, Param, Put, Delete, BadRequestException } from '@nestjs/common';
import { CreateMenuDto, UpdateMenuDto } from './dto/menu.dto';
import { MenuService } from './menu.service';
import { ApiBody, ApiOperation, ApiParam, ApiTags, ApiResponse } from '@nestjs/swagger';

@Controller('menu')
@ApiTags('Menu') 
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('period')
  @ApiOperation({ summary: 'Obter menu do dia' })
  @ApiResponse({ status: 200, description: 'Menu do dia retornado com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  getCurrentMenu() {
    try {
      return this.menuService.findByPeriod();
    } catch (error) {
      return new BadRequestException(error.message);
    }
  }

  @Post()
  @ApiOperation({ summary: 'Criar um novo menu' })
  @ApiBody({ type: CreateMenuDto })
  @ApiResponse({ status: 200, description: 'Menu criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  create(@Body() createMenuDto: CreateMenuDto) {
    try {
      return this.menuService.create(createMenuDto);
    } catch (error) {
      console.log(error.message);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Obter todos os menus' })
  @ApiResponse({ status: 200, description: 'Menus retornados com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  findAll() {
    try {
      return this.menuService.findAll();
    } catch (error) {
      console.log(error.message);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um menu pelo ID' })
  @ApiParam({ name: 'id', type: 'string' }) 
  @ApiResponse({ status: 200, description: 'Menu retornado com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  findOne(@Param('id') id: string) {
    try {
      return this.menuService.findOne(id);
    } catch (error) {
      console.log(error.message);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um menu pelo ID' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiBody({ type: UpdateMenuDto })
  @ApiResponse({ status: 200, description: 'Menu atualizado com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    try {
      return this.menuService.update(id, updateMenuDto);
    } catch (error) {
      console.log(error.message);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir um menu pelo ID' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ status: 200, description: 'Menu excluído com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  remove(@Param('id') id: string) {
    try {
      return this.menuService.remove(id);
    } catch (error) {
      console.log(error.message);
    }
  }
}
