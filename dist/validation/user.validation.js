"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define the Zod schema
const userValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).max(255),
    age: zod_1.z.number().int().positive(),
    email: zod_1.z.string().email(),
    photo: zod_1.z.string(),
    role: zod_1.z.enum(['user', 'admin']).default('user'),
    userStatus: zod_1.z.enum(['active', 'inactive']).default('active'),
});
exports.default = userValidationSchema;
