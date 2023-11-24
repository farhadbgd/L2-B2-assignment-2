import { UserModel } from './schema.model';
import { User } from './user.interface';

const createUserIntoDb = async (user: User) => {
  const createUser = new UserModel(user);
  if (await createUser.isExists(user.userId)) {
    throw new Error('User already exists');
  } else {
    const result = await createUser.save();
    return result;
  }
};

const getAllUsersfromDb = async () => {
  const result = await UserModel.find().select([
    'username',
    'fullName',
    'age',
    'email',
    'address',
  ]);
  return result;
};
const getSingleUserfromDb = async (Id: number) => {
  const result = await UserModel.findOne({ userId: Id }).select([
    'username',
    'fullName',
    'userId',
    'age',
    'email',
    'address',
    'isActive',
    'hobbies',
  ]);
  return result;
};
const updateSingleUserInDb = async (Id: number, user: User) => {
  const result = await UserModel.findOneAndUpdate({ userId: Id }, user, {
    new: true,
  }).select([
    'userId',
    'username',
    'fullName',
    'age',
    'email',
    'isActive',
    'hobbies',
    'address',
  ]);
  return result;
};
const deleteSingleUserfromDb = async (Id: number) => {
  const result = await UserModel.deleteOne({ userId: Id });
  return result;
};

const createOrderInUser = async (Id: number, Order: object) => {
  // const getUser = await UserModel.find({
  //   $and: [{ userId: Id }, { orders: { $exists: true } }],
  // });
  // const docs = await getUser.aggregate([{ $match: { 'name.last': 'Ghost' } }]);
  // console.log(getUser);
  // const checkOrder = { orders: { $exists: true } };

  // console.log(checkOrder);
  const result = await UserModel.findOneAndUpdate(
    { userId: Id },
    {
      $push: {
        orders: Order,
      },
    },
    {
      new: true,
    },
  );
  return result;

  // const result = await UserModel.create(user);

  // console.log('Start');
  // console.log(getResult);
  // console.log('End');

  // if (await createOrder .isExists(Id)) {
  //   throw new Error('User already exists');
  // } else {
  //   const result = await createUser.save();
  //   return result;
  // }

  // const result = await createUser.save();
  // console.log(result);
  // return result;
};

const getAllOrdersfromDb = async (Id: number) => {
  const result = await UserModel.findOne({ userId: Id }).select([
    'orders',
    '-_id',
  ]);
  return result;
};
const getTotalPricefromDb = async (Id: number) => {
  const createUser = new UserModel();
  if (!(await createUser.isExists(Id))) {
    throw new Error('User not found');
  } else {
    const result = await UserModel.findOne({ userId: Id }).select([
      'orders',
      '-_id',
    ]);
    let totalPrice = 0;
    result?.orders.forEach((order) => {
      totalPrice += Number(order.price) * Number(order.quantity);
    });
    return totalPrice;
  }
};

export const userService = {
  createUserIntoDb,
  getAllUsersfromDb,
  getSingleUserfromDb,
  updateSingleUserInDb,
  deleteSingleUserfromDb,
  createOrderInUser,
  getAllOrdersfromDb,
  getTotalPricefromDb,
};

// .select([
//   'orders',
//   '-_id',
// ]);
