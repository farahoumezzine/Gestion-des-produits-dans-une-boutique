import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CategoryUppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value.category) {
      value.category = value.category.toUpperCase();
    }
    return value;
  }
} 