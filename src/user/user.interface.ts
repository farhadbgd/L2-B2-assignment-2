import { Model } from 'mongoose';

export type User = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: [string, string];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: [
    {
      productName: string;
      price: string;
      quantity: string;
    },
  ];
};

// instance method
export type UserInstanceMethod = {
  // eslint-disable-next-line no-unused-vars
  isExists(id: number): Promise<User | null>;
};

export type UserInstanceMethodModel = Model<
  User,
  Record<string, never>,
  UserInstanceMethod
>;
