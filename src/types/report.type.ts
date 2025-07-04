import type { Period } from "./period.type";
import type { User } from "./user.type";

export interface Report {
  id: number;
  period_id: number;
  user_id: number;
  student: User;
  classroom: {
    grade: string;
    code: string;
    year: string;
  };
  period: Period;
  report_items?: {
    course_name: string;
    course_id: string;
    grade?: number;
  }[];
}
