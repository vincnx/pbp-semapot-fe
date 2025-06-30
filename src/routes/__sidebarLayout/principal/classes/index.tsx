import { ClassDataTable } from "@/features/principal/classes/components/class-datatable";
import { columns } from "@/features/principal/classes/components/columns";
import type { Class } from "@/types/class.type";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/principal/classes/")({
  component: RouteComponent,
  loader: async () => {
    return {
      data: await getData(),
    };
  },
});

async function getData(): Promise<Class[]> {
  return [
    {
      id: 1,
      grade: 1,
      code: "a",
      user: {
        id: 1,
        email: "teacher@test.com",
        name: "Teacher",
        role: "teacher",
      },
      year: 2025,
    },
  ];
}

function RouteComponent() {
  // const { data } = useFetchClasses();
  const { data } = Route.useLoaderData();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Classes data</h1>
        <ClassDataTable columns={columns} data={data ?? []} />
      </div>
    </>
  );
}
