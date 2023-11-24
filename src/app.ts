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

// if (result?._id) {
//   res.status(200).json({
//     success: true,
//     message: 'Order created successfully!',
//     data: null,
//   });
// } else {
//   res.status(500).json({
//     success: false,
//     message: 'User not found',
//     error: {
//       code: 404,
//       description: 'User not found!',
//     },
//   });
// }
