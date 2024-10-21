import { z } from 'zod';

export const shortenedUrlSchema = z.object({
    original_url: z.string()
        .min(1, { message: 'URL is required' })
        .url({ message: 'Invalid URL' }),
});

export type ShortenedUrl = z.infer<typeof shortenedUrlSchema> & 
    { id: string,  url_key: string, default_short_url: string, destination_url: string };