import { defineConfig } from '@prisma/config';

export default defineConfig({
  datasource: {
    url: "postgresql://devpulse:devpulse123@localhost:5432/devpulse_db?schema=public",
  },
});