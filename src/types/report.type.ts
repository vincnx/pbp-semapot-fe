import type { Class } from "./class.type";
import type { Course } from "./course.type";
import type { Period } from "./period.type";
import type { User } from "./user.type";

export interface Report {
  id: number;
  period_id: number;
  user_id: number;
  student: User;
  classroom: Class;
  period: Period;
  report_items?: {
    course: Course;
    name: string;
    course_id: number;
    grade?: number;
  }[];
}
