import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string({ message: "name is required" }),
    email: z
      .string({ message: "email is required" })
      .email({ message: "email is invalid" }),
    password: z
      .string({ message: "password is required" })
      .min(6, { message: "password must be at least 6 characters" }),
    confirmPassword: z
      .string({ message: "confirm password is required" })
      .min(6, { message: "password must be at least 6 characters" }),
  })
  .required()
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        message: "password does not match",
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
      });
    }
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
