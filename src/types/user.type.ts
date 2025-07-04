import type { ClassStudent } from "./class-student.type";

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  class_students?: ClassStudent[];
}
