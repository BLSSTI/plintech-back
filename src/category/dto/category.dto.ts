import { ApiProperty } from "@nestjs/swagger";

class CreateCategoryDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly menuId: string;
}

class UpdateCategoryDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly menuId: string;
}

class CategoryDto {
  
  readonly id: string;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly menuId: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export {
  CategoryDto, UpdateCategoryDto, CreateCategoryDto
}