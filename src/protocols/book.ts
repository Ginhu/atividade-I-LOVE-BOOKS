export type Book = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  purchaseDate: Date;
  read: boolean;
  review: string;
  grade: number;
};

export type CreateBook = {
  title: string;
  author: string;
  publisher: string;
  purchaseDate: Date;
  cover: string;
};