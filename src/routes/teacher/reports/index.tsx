import { columns } from "@/features/teacher/reports/components/columns";
import { ReportDataTable } from "@/features/teacher/reports/components/report-datatable";
import type { Report } from "@/types/report.type";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/teacher/reports/")({
  component: RouteComponent,
  loader: async () => {
    const data = await getData();
    return { data };
  },
});

async function getData(): Promise<Report[]> {
  return [
    {
      class: {
        code: "a",
        grade: "1",
        year: "2024",
      },
      period: {
        semester: "1",
        year: "2024",
      },
      student: {
        id: "1",
        name: "budi budi",
      },
    },
  ];
}

function RouteComponent() {
  const { data } = Route.useLoaderData();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Reports data</h1>
        <ReportDataTable columns={columns} data={data} />
      </div>
    </>
  );
}
