import { useFetchReports } from "@/features/teacher/hooks/useFetchReports";
import { columns } from "@/features/teacher/reports/components/columns";
import { ReportDataTable } from "@/features/teacher/reports/components/report-datatable";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/teacher/reports/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useFetchReports();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Reports data</h1>
        <ReportDataTable columns={columns} data={data ?? []} />
      </div>
    </>
  );
}
