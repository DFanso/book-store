import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    // Check if a book with the same title and author already exists
    const bookExists = await this.bookModel
      .findOne({
        title: createBookDto.title,
        author: createBookDto.author,
      })
      .exec();

    if (bookExists) {
      // Handle the case where the book already exists.
      throw new ConflictException(
        'A book with the given title and author already exists.',
      );
    }

    const newBook = new this.bookModel(createBookDto);
    return newBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
}
