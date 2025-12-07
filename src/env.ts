import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['development','test','production']).default('development'),
    PORT: z.coerce.number().default(3333)
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
    console.error('Invalid Environments ❌')
    throw new Error('Invalid Environments ❌')
}

const env = _env.data

export { env };

