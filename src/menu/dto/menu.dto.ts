import { ApiProperty } from "@nestjs/swagger";

class CreateMenuDto {
    @ApiProperty()
    readonly name: string;
}

class UpdateMenuDto {
    @ApiProperty()
    readonly name: string;
}

class MenuDto {
    @ApiProperty()
    readonly id: string;
    @ApiProperty()
    readonly name: string;

    readonly createdAt: Date;
    readonly updatedAt: Date;
}

export {
    MenuDto, UpdateMenuDto, CreateMenuDto
}