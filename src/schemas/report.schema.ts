import { z } from "zod";

export const reportSchema = z
  .object({
    report_items: z.array(
      z.object({
        course_id: z.string().min(1, { message: "course id is required" }),
        course_name: z.string().min(1, { message: "course name is required" }),
        grade: z.coerce
          .number()
          .min(0, { message: "grade must be greater than 0" })
          .max(100, { message: "grade must be less than 100" }),
      }),
    ),
  })
  .required();

export type ReportSchema = z.infer<typeof reportSchema>;
