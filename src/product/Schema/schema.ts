import { Schema as MongooseSchema, Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;
@Schema()
export class Product {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  quantity: number;
  @Prop({ required: true })
  category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
