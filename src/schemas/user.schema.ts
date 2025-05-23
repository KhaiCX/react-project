import { z } from "zod";

export const userSchema = z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    maidenName: z.string(),
    age: z.number(),
    gender: z.string(),
    phone: z.string(),
    username: z.string(),
    password: z.string(),
    birthDate: z.string(),
    image: z.string(),
    address: z.object({
        address: z.string(),
        city: z.string(),
        state: z.string(),
        postalCode: z.string(),
        country: z.string()
    }),
    email: z.string()
})

export type User = z.infer<typeof userSchema>