/* Task 1: Create a MongoDB model with an interface and schema for a "Book" collection that stores fields like title, author, genre, publication year, rating, price, and nested fields like "publisher" and "reviews". All the fields would be required. */
interface IReview {
  user: string;
  comment: string;
}

type Price = string | number;
export interface newBookInterface {
  title: string;
  author: Array<string>;
  genre: string;
  publicationYear: number;
  rating: number;
  price: Price;
  publisher: {
    name: string;
    location: string;
  };
  reviews: Array<IReview>;
}
