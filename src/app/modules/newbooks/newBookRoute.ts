import express from "express";
import { getBooks, createBooks,deleteBooks,findBookdByGenre ,findBookdByGenreandpublished} from "./newBookController";

const router = express.Router();

router.get("/", getBooks);
router.post("/createBooks", createBooks);
router.delete("/:id", deleteBooks);
router.get("/findBookdByGenre", findBookdByGenre);
router.get("/findBookdByGenreandpublished", findBookdByGenreandpublished);

export default router;
