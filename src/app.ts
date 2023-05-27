import cors from "cors";
import userRouter from "./app/modules/user/userRoute1";
import bookRouter from "./app/modules/newbooks/newBookRoute";
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.use("/user/", userRouter);
app.use("/book/", bookRouter);

export default app;
