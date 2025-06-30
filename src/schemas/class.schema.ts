import { z } from "zod";

export const classSchema = z
  .object({
    grade: z.coerce
      .number({ message: "grade is required" })
      .min(1, { message: "grade must be greater than 0" })
      .max(6, { message: "grade must be less than 6" }),
    code: z.string({ message: "code is required" }).max(1),
    year: z.coerce.number({ message: "year is required" }),
    class_teacher: z.coerce.number({ message: "class teacher is required" }),
  })
  .required();

export type ClassSchema = z.infer<typeof classSchema>;
