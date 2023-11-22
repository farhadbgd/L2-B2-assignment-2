import { UserModel } from './schema.model';
import { User } from './user.interface';

const createUserIntoDb = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUsersfromDb = async () => {
  const result = await UserModel.find();
  return result;
};
const getSingleUserfromDb = async (Id: number) => {
  const result = await UserModel.findOne({ userId: Id });
  return result;
};
const updateSingleUserInDb = async (Id: number, user: User) => {
  console.log(user);
  const result = await UserModel.findOneAndUpdate({ userId: Id }, user, {
    new: true,
  });
  console.log(result);
  return result;
};
const deleteSingleUserfromDb = async (Id: number) => {
  const result = await UserModel.deleteOne({ userId: Id });
  return result;
};

export const userService = {
  createUserIntoDb,
  getAllUsersfromDb,
  getSingleUserfromDb,
  updateSingleUserInDb,
  deleteSingleUserfromDb,
};
