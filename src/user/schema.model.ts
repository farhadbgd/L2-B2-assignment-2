import { Schema, model } from 'mongoose';
import { User } from './user.interface';

const UserSchema = new Schema<User>({
  userId: { type: Number },
  username: { type: String },
  password: { type: String },
  fullName: {
    firstName: { type: String },
    lastName: { type: String },
  },
  age: { type: Number },
  email: { type: String },
  isActive: { type: Boolean },
  hobbies: [[String]], // Need to check how to declare array of string.
  address: {
    street: { type: String },
    city: { type: String },
    country: { type: String },
  },
  orders: [
    [
      {
        productName: { type: String },
        price: { type: String },
        quantity: { type: String },
      },
    ],
  ], // Need to check how to declare array of object.
});

export const UserModel = model('Users', UserSchema);
