import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { usertRoutes } from './user/user.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/', usertRoutes);
app.get('/', (req: Request, res: Response) => {
  const a = 'hello world';

  res.send(a);
});

export default app;

// {
//   "userId": 10,
//   "username": "exampleUsername",
//   "password": "examplePassword",
//   "fullName": {
//     "firstName": "John",
//     "lastName": "Doe"
//   },
//   "age": 25,
//   "email": "john.doe@example.com",
//   "isActive": true,
//   "hobbies": ["Reading", "Traveling"],
//   "address": {
//     "street": "123 Main Street",
//     "city": "Cityville",
//     "country": "Countryland"
//   }
// }

// --------------------/100/orders/total-price
// {
//   "productName": "apple",
//   "price": 15,
//   "quantity": 20
// }

//-----------------------------
// const createOrderInUser = async (Id: number, Order: object) => {
//   const createAOrder = new UserModel();
//   if (!(await createAOrder.isExists(Id))) {
//     throw new Error('User not found');
//   } else {
//     // const result = await UserModel.aggregate([
//     //   {
//     //     $group: {
//     //       _id: Id,
//     //       orders: { $push: Order },
//     //     },
//     //   },
//     //   { $project: { orders: 1 } },

//     // { $match: { userId: Id } },
//     // { $addFields: { orders: [Order] } },
//     // ]);

//     const result = await UserModel.findOneAndUpdate(
//       { userId: Id },
//       {
//         $push: {
//           orders: Order,
//         },
//       },
//       {
//         new: true,
//       },
//     ).select(['orders', '']);
//     return result;
//   }
//   // };
//   //   const result = await UserModel.updateOne({ userId: Id }, [
//   //     { $set: { orders: [Order] } },
//   //   ]).select('test2');
//   //   return result;
//   // }
// };
