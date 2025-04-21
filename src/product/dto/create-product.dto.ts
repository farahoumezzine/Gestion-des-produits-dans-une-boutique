import { PartialType } from "@nestjs/swagger";

export class CreateProductDto {
  name: string;
  price: number;
  quantity: number;
  category: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
