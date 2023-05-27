import mongoose, { Schema } from "mongoose";
import { Iuser } from "./userInterface";
// creating a schema
const userSchema = new Schema<Iuser>({
  name: String,
  age: Number,
  dream: String,
  gender: String,
  isBangladeshi: Boolean,
});

//creating a model
export const userModel = mongoose.model("UserPractice", userSchema);


/* steps
1. connect to the database
2. add express codes
3. create a interface 
4. create a schema based on interface
5.create a model.............. line 13
6. create a route file inside this file define every routes
7. then create a controller file where all function will be present that calls different databse and show the data
8. create a service file where every operation was held find,update,delete,post ...
*/