import { Request, Response, NextFunction } from "express";
import {
  getBooksFromDB,
  createBooksIntoDB,
  deleteBooksFromDB,
  findBookdByGenreFromDB,
  findBookdByGenreandPublishedFromDB,
} from "./newbookservice";

export const createBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const books = await createBooksIntoDB(data);
  res.status(200).json({
    message: "Successfully added a book into the database",
    books,
  });
};

export const getBooks = async (req: Request, res: Response) => {
  const books = await getBooksFromDB();
  res.status(200).json({
    status: "Successfully find all books from db",
    data: books,
  });
};
/* Task 2: Implement a MongoDB query to find all books in the "Books" collection with a specific genre, such as "Fantasy" */
export const findBookdByGenre = async (req: Request, res: Response) => {
  const books = await findBookdByGenreFromDB();
  res.status(200).json({
    status: "Successfully find all Fantasy books from db",
    data: books,
  });
};
/* Task 3: Implement a MongoDB query to find books in the "Books" collection with a specific genre “Sci-Fi” and published by “Roli Books”. */
export const findBookdByGenreandpublished = async (
  req: Request,
  res: Response
) => {
  const books = await findBookdByGenreandPublishedFromDB();
  res.status(200).json({
    status: "Successfully find all specific Fantasy and published books from db",
    data: books,
  });
};




/* findByIdAndDelete    implement */
export const deleteBooks = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedDocument = await deleteBooksFromDB(id);
    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    return res.json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error("Error deleting document:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
