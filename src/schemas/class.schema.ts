import { z } from "zod";

export const classSchema = z
  .object({
    grade: z.coerce.number({ message: "grade is required" }),
    code: z.string({ message: "code is required" }).max(1),
    year: z.coerce.number({ message: "year is required" }),
    user_id: z.coerce.number({ message: "user_id is required" }),
  })
  .required();

export type ClassSchema = z.infer<typeof classSchema>;
