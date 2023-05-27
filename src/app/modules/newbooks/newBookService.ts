import { newBookInterface } from "./newBookInterface";
import newbooks from "./newBookModel";

export const getBooksFromDB = () => {};

export const createBooksIntoDB = async (
  payload: newBookInterface
): Promise<newBookInterface> => {
  const book = await new newbooks(payload);
  await book.save();
  return book;
};
export const findBookdByGenreFromDB = async () => {
  const findDocument = await newbooks.find({ genre: "Fantasy" });
  return findDocument;
};

//task 3
export const findBookdByGenreandPublishedFromDB = async () => {
  const findDocument = await newbooks.find({
    $and: [{ genre: "Sci-Fi" }, { "publisher.name": "Roli Books" }],
  });
  return findDocument;
};
export const deleteBooksFromDB = async (documentId: string) => {
  const deletedDocument = await newbooks.findByIdAndDelete(documentId);
  return deletedDocument;
};
