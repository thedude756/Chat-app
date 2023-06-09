import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();

type Env = {
    UPSTASH_REDIS_REST_URL: string;
    UPSTASH_REDIS_REST_TOKEN: string;
}

const env: Env = process.env as any;

export const db = new Redis({
    url: env.UPSTASH_REDIS_REST_URL,
    token: env.UPSTASH_REDIS_REST_TOKEN,
});
