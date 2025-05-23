import { z } from "zod";

export const userSchema = z.object({
    id: z.number(),
    fullName: z.string(),
    email: z.string(),
    username: z.string().email(),
    phone: z.string(),
    imageUrl: z.string(),
    role: z.string(),
    status: z.boolean(),
    created_at: z.string(),
    updated_at: z.string()
})

export type User = z.infer<typeof userSchema>