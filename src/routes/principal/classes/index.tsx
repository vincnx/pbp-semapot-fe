import { ClassDataTable } from "@/features/principal/classes/components/class-datatable";
import { columns } from "@/features/principal/classes/components/columns";
import type { Class } from "@/types/class.type";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/principal/classes/")({
  component: RouteComponent,
  loader: async () => {
    const data = await getData();
    return { data };
  },
});

async function getData(): Promise<Class[]> {
  return [
    {
      id: "1",
      grade: "1",
      code: "a",
      year: "2025",
      class_teacher: {
        id: "1",
        name: "toni toni",
      },
    },
    {
      id: "2",
      grade: "1",
      code: "b",
      year: "2025",
      class_teacher: {
        id: "2",
        name: "toni tono",
      },
    },
  ];
}

function RouteComponent() {
  const { data } = Route.useLoaderData();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Classes data</h1>
        <ClassDataTable columns={columns} data={data} />
      </div>
    </>
  );
}
