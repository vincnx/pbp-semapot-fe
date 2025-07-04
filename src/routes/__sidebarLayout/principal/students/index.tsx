import { useFetchStudents } from "@/features/principal/hooks/useFetchStudents";
import { columns } from "@/features/principal/students/components/columns";
import { StudentDataTable } from "@/features/principal/students/components/student-datatable";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/principal/students/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading } = useFetchStudents();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Students data</h1>
        <StudentDataTable
          columns={columns}
          data={data ?? []}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
