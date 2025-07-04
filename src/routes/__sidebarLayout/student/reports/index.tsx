import Loader from "@/components/loader";
import { useFetchReports } from "@/features/student/hooks/useFetchReports";
import { columns } from "@/features/student/reports/components/columns";
import { ReportDataTable } from "@/features/student/reports/components/report-datatable";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/student/reports/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading } = useFetchReports();

  if (!data) return <Loader isLoading={isLoading} />;

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Reports history data</h1>
        <ReportDataTable columns={columns} data={data} />
      </div>
    </>
  );
}
