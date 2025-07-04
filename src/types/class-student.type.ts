import type { Class } from "./class.type";

export interface ClassStudent {
  id: number;
  classroom_id: number;
  user_id: number;
  is_active: number;
  classroom?: Class;
}
