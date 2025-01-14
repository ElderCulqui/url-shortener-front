import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string()
        .min(1, { message: 'Email is required' })
        .email({ message: 'Invalid email' }),
    password: z.string()
        .min(1, { message: 'Password is required' })
});

export type LoginObject = z.infer<typeof loginSchema> & { id: string };