import { useFetchPeriods } from "@/features/principal/hooks/useFetchPeriods";
import { columns } from "@/features/principal/periods/components/columnts";
import { PeriodDataTable } from "@/features/principal/periods/components/period-datatable";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/principal/periods/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading } = useFetchPeriods();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Periods data</h1>
        <PeriodDataTable
          columns={columns}
          data={data ?? []}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
