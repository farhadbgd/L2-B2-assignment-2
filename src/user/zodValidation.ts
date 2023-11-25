import { z } from 'zod';
const userValidationSchemaByZod = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number(),
  email: z.string().email({ message: 'Email is not valid' }),
  isActive: z.boolean(),
  hobbies: z.string().array(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  orders: z
    .array(
      z.object({
        productName: z.string(),
        price: z.number(),
        quantity: z.number(),
      }),
    )
    .optional(),
});

export default userValidationSchemaByZod;
