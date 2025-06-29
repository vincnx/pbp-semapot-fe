import { z } from "zod";

export const studentSchema = z
  .object({
    name: z.string().min(1, { message: "name is required" }),
    class_id: z.string().min(1, { message: "class is required" }),
  })
  .required();

export type StudentSchema = z.infer<typeof studentSchema>;
