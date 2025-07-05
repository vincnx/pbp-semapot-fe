import type { User } from "./user.type";

export interface Class {
  id: number;
  grade: number;
  code: string;
  year: number;
  home_teacher?: User;
}
