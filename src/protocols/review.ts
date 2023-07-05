export type Review = {
  id: number;
  bookId: number;
  review: string;
  grade: number;
};

export type CreateReview = {
  bookId: number;
  review: string;
  grade: number;
  read: boolean;
}