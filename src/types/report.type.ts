export interface Report {
  id: string;
  student: {
    id: string;
    name: string;
  };
  class: {
    grade: string;
    code: string;
    year: string;
  };
  period: {
    year: string;
    semester: string;
  };
  report_items?: {
    course_name: string;
    course_id: string;
    grade?: number;
  }[];
}
