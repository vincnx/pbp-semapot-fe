import { columns } from "@/features/principal/courses/components/columns";
import { CourseDataTable } from "@/features/principal/courses/components/course-datatable";
import type { Course } from "@/types/course.type";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/principal/courses/")({
  component: RouteComponent,
  loader: async () => {
    const data = await getData();
    return { data };
  },
});

async function getData(): Promise<Course[]> {
  // TODO: change this with real data
  return [
    {
      id: "1",
      name: "bahasa indonesia",
    },
    {
      id: "2",
      name: "bahasa inggris",
    },
    {
      id: "3",
      name: "ilmu pengetahuan alam",
    },
    {
      id: "4",
      name: "ilmu pengetahuan sosial",
    },
    {
      id: "5",
      name: "kewarganegaraan",
    },
  ];
}

function RouteComponent() {
  const { data } = Route.useLoaderData();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Courses data</h1>
        <CourseDataTable columns={columns} data={data} />
      </div>
    </>
  );
}
