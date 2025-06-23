import { z } from "zod";

export const loginSchema = z
  .object({
    email: z
      .string({ message: "email is required" })
      .email({ message: "email is invalid" }),
    password: z
      .string({ message: "password is required" })
      .min(6, { message: "password must be at least 6 characters" }),
  })
  .required();

export type LoginSchema = z.infer<typeof loginSchema>;
