import { z } from "zod";

const schema = z.object({
  BOT_TOKEN: z.string(),
  DATABASE_URL: z.string(),
  API_URL: z.string(),
});

const checkConfig = () => {
  const parsed = schema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      "❌ Invalid environment variables:",
      JSON.stringify(parsed.error.format(), null, 4)
    );
    process.exit(1);
  }
};

export { checkConfig };
