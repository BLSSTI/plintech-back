import { ApiProperty } from "@nestjs/swagger";

class CreateProductDto {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly price: number;
    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly image: string;
    @ApiProperty()
    readonly categoryId: string;
}

class UpdateProductDto {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly price: number;
    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly image: string;
    @ApiProperty()
    readonly categoryId: string;
}

class ProductDto {
    @ApiProperty()
    readonly id: string;
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly price: number;
    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly image: string;
    @ApiProperty()
    readonly categoryId: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

export {
    CreateProductDto,
    UpdateProductDto,
    ProductDto
}