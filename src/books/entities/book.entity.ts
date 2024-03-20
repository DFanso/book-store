import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ required: true, maxlength: 100 })
  title: string;

  @Prop({ required: true, maxlength: 100 })
  author: string;

  @Prop({ required: true, type: Number, min: 0 })
  year: number;

  @Prop({ required: false })
  genre?: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
