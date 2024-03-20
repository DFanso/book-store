import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    example: 'The Great Gatsby',
    description: 'The title of the book',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title: string;

  @ApiProperty({
    example: 'F. Scott Fitzgerald',
    description: 'The author of the book',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  author: string;

  @ApiProperty({
    example: 1925,
    description: 'The publication year of the book',
  })
  @IsInt()
  @Min(0)
  year: number;

  @ApiProperty({
    example: 'Novel',
    description: 'The genre of the book',
    required: false,
  })
  @IsOptional()
  @IsString()
  genre?: string;
}
