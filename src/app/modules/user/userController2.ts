import { Request, Response, NextFunction } from "express";
import { createUserToDB, getUserDB, updateUserDB,findOneUserDB } from "./userService3";
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "successfully add the user",
    data: user,
  });
};
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUserDB();

  res.status(200).json({
    status: "successfully add the user",
    data: user,
  });
};

//findone
export const findOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const oneUser = await findOneUserDB(id);
  console.log("hitted from=", id);
  res.status(200).json({
    status: "successfullty find the user",
    data: oneUser,
  });
};

export const UpdateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await updateUserDB();
  res.status(200).json({
    status: "successfully update the user",
    data: user, 
  });
};

/* 
export const updateDocumentController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { name,age } = req.body;

  try {
    const updatedDocument = await updateUserDB(id, {age });

    if (updatedDocument) {
      res.json(updatedDocument);
    } else {
      res.status(404).json({ message: 'Document not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}; */