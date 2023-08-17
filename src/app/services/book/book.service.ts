import { Injectable } from '@angular/core';
import { Book } from '../../models/Book';
import { HttpClient } from '@angular/common/http';
import books from './books.json';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}
  private books: Book[] = books;
  getBookById(id: number): any {
    return this.getAll().find((book) => book.id == id)!;
  }

  getAllBooksBySearchTerm(searchTerm: string): any {
    return this.getAll().filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAll(): Book[] {
    return books;
  }
}
