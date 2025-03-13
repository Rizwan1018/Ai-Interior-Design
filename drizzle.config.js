import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-interior-design_owner:npg_N6Vd4miyZMea@ep-white-moon-a5nbh1sc-pooler.us-east-2.aws.neon.tech/ai-interior-design?sslmode=require'
  },
});