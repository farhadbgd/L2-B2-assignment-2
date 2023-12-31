import { Schema, model } from 'mongoose';
import {
  User,
  UserInstanceMethod,
  UserInstanceMethodModel,
} from './user.interface';
import bcrypt from 'bcrypt';
const saltRounds = 10;

const UserSchema = new Schema<
  User,
  UserInstanceMethodModel,
  UserInstanceMethod
>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String },
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
      _id: false,
    },
    { required: false },
  ],
});

UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj._id;
  delete obj.__v;
  if (this.orders?.length === 0) {
    delete obj.orders;
  }
  return obj;
};

// bcrypt pre midleware
UserSchema.pre('save', async function () {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(user.password, saltRounds);
});

UserSchema.methods.isExists = async function (id: number) {
  const existingUser = await UserModel.findOne({ userId: id });
  return existingUser;
};

export const UserModel = model<User, UserInstanceMethodModel>(
  'Users',
  UserSchema,
);
