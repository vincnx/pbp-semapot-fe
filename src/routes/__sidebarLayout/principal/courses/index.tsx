import { columns } from "@/features/principal/courses/components/columns";
import { CourseDataTable } from "@/features/principal/courses/components/course-datatable";
import { useFetchCourses } from "@/features/principal/hooks/useFetchCourses";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/principal/courses/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading } = useFetchCourses();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Courses data</h1>
        <CourseDataTable
          columns={columns}
          data={data ?? []}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
