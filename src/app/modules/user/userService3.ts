import { Iuser } from "./userInterface";
import { userModel } from "./userModel";

export const createUserToDB = async (payload: Iuser): Promise<Iuser> => {
  const user = await new userModel(payload);
  await user.save();
  return user;
};
export const getUserDB = async () => {
  return await userModel.find();
};
export const findOneUserDB = async (payload: string) => {
  return await userModel.findOne();
};
export const updateUserDB = async () => {
  return await userModel.updateMany({}, { name: "bithi" });
};
