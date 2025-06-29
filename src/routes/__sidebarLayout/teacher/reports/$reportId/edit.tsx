import ReportForm from "@/features/teacher/reports/components/report-form";
import type { ReportSchema } from "@/schemas/report.schema";
import type { Report } from "@/types/report.type";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/teacher/reports/$reportId/edit",
)({
  component: RouteComponent,
  loader: async () => {
    const data = await getData();
    return {
      data,
      crumb: "Edit",
    };
  },
});

async function getData(): Promise<Report> {
  return {
    id: "1",
    student: {
      id: "1",
      name: "John Doe",
    },
    class: {
      grade: "1",
      code: "a",
      year: "2025",
    },
    period: {
      year: "2025",
      semester: "1",
    },
    report_items: [
      {
        course_name: "Math",
        course_id: "1",
        grade: 85,
      },
      {
        course_name: "Science",
        course_id: "2",
        grade: 90,
      },
      {
        course_name: "English",
        course_id: "3",
      },
    ],
  };
}

function onSubmit(values: ReportSchema) {
  console.log(values);
}

function RouteComponent() {
  const { data } = Route.useLoaderData();

  const dataPairContainer = "flex gap-2";
  const labelStyle = "w-16";

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Edit report</h1>
        <div className="flex flex-col gap-2">
          <div className={dataPairContainer}>
            <p className={labelStyle}>Student</p>
            <p>: {data.student.name}</p>
          </div>
          <div className={dataPairContainer}>
            <p className={labelStyle}>Class</p>
            <p>
              : {data.class.grade} {data.class.code.toUpperCase()}
            </p>
          </div>
          <div className={dataPairContainer}>
            <p className={labelStyle}>Period</p>
            <p>
              : {data.period.year} sem {data.period.semester}
            </p>
          </div>
        </div>
        <ReportForm data={data} onSubmit={onSubmit} />
      </div>
    </>
  );
}
