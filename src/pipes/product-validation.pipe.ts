import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../product/dto/create-product.dto';

@Injectable()
export class ProductValidationPipe implements PipeTransform {
  transform(value: CreateProductDto | UpdateProductDto, metadata: ArgumentMetadata) {
    if (value.name?.trim() === '') {
      throw new BadRequestException('Name cannot be empty');
    }
    if (value.price && value.price <= 0) {
      throw new BadRequestException('Price must be positive');
    }
    if (value.quantity && value.quantity <= 0) {
      throw new BadRequestException('Quantity must be positive');
    }
    return value;
  }
} 