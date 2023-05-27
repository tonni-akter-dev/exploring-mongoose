import mongoose, { Schema } from "mongoose";
import { newBookInterface } from "./newBookInterface";
const bookSchema = new Schema<newBookInterface>({
  title: {
    type: String,
    required: true,
  },
  author: [
    {
      type: String,
      required: true,
    },
  ],
  genre: {
    type: String,
    required: true,
  },
  publicationYear: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Schema.Types.Mixed,
    required: true,
  },
  publisher: {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
});
const newbooks = mongoose.model("newbooks", bookSchema);
export default newbooks;
