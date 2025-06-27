import { columns } from "@/features/principal/students/components/columns";
import { StudentDataTable } from "@/features/principal/students/components/student-datatable";
import { type Student } from "@/types/student.type";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/principal/students/")({
  component: RouteComponent,
  loader: async () => {
    const data = await getData();
    return { data };
  },
});

async function getData(): Promise<Student[]> {
  return [
    {
      id: "1",
      class: {
        grade: "1",
        code: "a",
      },
      name: "budi budi",
    },
    {
      id: "2",
      class: {
        grade: "1",
        code: "a",
      },
      name: "agus agus",
    },
    {
      id: "3",
      class: {
        grade: "2",
        code: "a",
      },
      name: "joko joko",
    },
    {
      id: "4",
      class: {
        grade: "3",
        code: "b",
      },
      name: "rudi rudi",
    },
  ];
}

function RouteComponent() {
  const { data } = Route.useLoaderData();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Students data</h1>
        <StudentDataTable columns={columns} data={data} />
      </div>
    </>
  );
}
