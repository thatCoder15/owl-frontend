import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email"),
  message: z.string().min(10, "Message is too short"),
});

export type ContactSchema = z.infer<typeof contactSchema>;

// email: z.string().email("Invalid email"), use if error in email validation