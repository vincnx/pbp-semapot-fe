export interface Class {
  id: string;
  grade: string;
  code: string;
  year: string;
  class_teacher: {
    id: string;
    name: string;
  };
}
