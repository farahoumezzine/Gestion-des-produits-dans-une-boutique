import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ParsePositiveIntPipe } from '../pipes/parse-positive-int.pipe';
import { ProductValidationPipe } from '../pipes/product-validation.pipe';
import { CategoryUppercasePipe } from '../pipes/category-uppercase.pipe';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(
    @Body(CategoryUppercasePipe, ProductValidationPipe) createProductDto: CreateProductDto,
  ) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParsePositiveIntPipe) id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParsePositiveIntPipe) id: string,
    @Body(CategoryUppercasePipe, ProductValidationPipe) updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ParsePositiveIntPipe) id: string) {
    return this.productService.remove(id);
  }
}
