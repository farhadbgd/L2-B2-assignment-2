import { Schema, model } from 'mongoose';
import { User } from './user.interface';

const UserSchema = new Schema<User>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: [String], // Need to check how to declare array of string.
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: [
    {
      productName: { type: String },
      price: { type: String },
      quantity: { type: String },
    },
  ], // Need to check how to declare array of object.
});

export const UserModel = model('Users', UserSchema);
