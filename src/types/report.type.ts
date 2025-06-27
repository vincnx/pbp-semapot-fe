export interface Report {
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
}
