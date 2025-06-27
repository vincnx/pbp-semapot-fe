import { z } from "zod";

export const periodSchema = z
  .object({
    year: z.coerce
      .number({ message: "year is required" })
      .int()
      .min(2020, { message: "year must be at least 2020" }),
    semester: z.enum(["1", "2"], { message: "semester must be Odd or Even" }),
    is_active: z.coerce.boolean().optional(),
  })
  .required();

export type PeriodSchema = z.infer<typeof periodSchema>;
