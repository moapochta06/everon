import { defineConfig } from 'drizzle-kit'
import { config } from 'dotenv'
const password = process.env.DB_PASSWORD ?? ''

config({ path: '.env' })

export default defineConfig({
  dialect: 'mysql',
  schema: './db/schema.ts',          
  out: './migrations',               
  dbCredentials: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || 'root',
    database: process.env.DB_NAME || 'everon_db',
    ...(password && { password }), 
  },
  verbose: true,
  strict: true,
})