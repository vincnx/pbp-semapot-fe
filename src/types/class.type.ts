import type { User } from "./user.type";

export interface Class {
  id: string;
  grade: string;
  code: string;
  year: string;
  user: User;
}
