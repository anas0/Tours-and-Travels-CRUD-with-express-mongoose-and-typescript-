import { z } from 'zod';

// Define the Zod schema
const userValidationSchema = z.object({
  name: z.string().min(3).max(255),
  age: z.number().int().positive(),
  email: z.string().email(),
  photo: z.string(),
  role: z.enum(['user', 'admin']).default('user'),
  userStatus: z.enum(['active', 'inactive']).default('active'),
});

export default userValidationSchema