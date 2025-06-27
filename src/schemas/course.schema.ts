import { z } from "zod";

export const courseSchema = z
  .object({
    name: z.string({ message: "name is required" }),
  })
  .required();

export type CourseSchema = z.infer<typeof courseSchema>;
