import StudentForm from "@/features/principal/students/components/student-form";
import type { StudentSchema } from "@/schemas/student.schema";
import type { Student } from "@/types/student.type";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/principal/students/$studentId/edit",
)({
  component: RouteComponent,
  loader: async () => {
    const data = await getData();
    return {
      data,
    };
  },
});

async function getData(): Promise<Student> {
  return {
    id: "1",
    name: "John Doe",
    class: {
      id: "1a",
      grade: "1",
      code: "1a",
    },
  };
}

function onSubmit(values: StudentSchema) {
  console.log(values);
}

function RouteComponent() {
  const { data } = Route.useLoaderData();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Edit student</h1>
        <StudentForm data={data} onSubmit={onSubmit} />
      </div>
    </>
  );
}
