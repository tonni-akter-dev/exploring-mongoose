import app from "./app";
import mongoose from "mongoose";

const port = 4000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-explore");
    console.log("Databse connected successfully");
  } catch (err) {
    console.log("Failed to connect database");
  }
}
app.listen(port, () => {
  console.log(`Mongoose app listening on port ${port}`);
});
main();
