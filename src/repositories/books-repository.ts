import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import connection from "../database";
import prisma from "../database";

export async function getBooks() {
  const books = await prisma.books.findMany()
  return books;
}

export async function getBook(id: number) {
  const book = await prisma.books.findFirst({
    where: {
      id: id
    }
  })
  const query = `SELECT * FROM books WHERE id = $1`;

  return book;
}

export async function createBook(book: CreateBook) {
  
  const { title, author, publisher, cover } = book;
  const create = await prisma.books.create({
    data: {
      title,
      author,
      publisher,
      cover
    }
  })
  return create;
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review, read } = bookReview;

  const update = await prisma.books.update({
    data: {
      grade,
      review,
      read
    },
    where: {
      id: bookId
    }
  })

  return update;
}