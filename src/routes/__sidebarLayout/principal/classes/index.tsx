import { ClassDataTable } from "@/features/principal/classes/components/class-datatable";
import { columns } from "@/features/principal/classes/components/columns";
import { useFetchClasses } from "@/hooks/requests/useFetchClasses";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/principal/classes/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useFetchClasses();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Classes data</h1>
        <ClassDataTable columns={columns} data={data ?? []} />
      </div>
    </>
  );
}
