import CourseForm from "@/features/principal/periods/components/course-form";
import type { CourseSchema } from "@/schemas/course.schema";
import type { Course } from "@/types/course.type";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/principal/courses/$courseId/edit",
)({
  component: RouteComponent,
  loader: async () => {
    const data = await getData();
    return {
      data,
      crumb: "edit",
    };
  },
});

async function getData(): Promise<Course> {
  return {
    id: "1",
    name: "Bahasa Indonesia",
  };
}

function onSubmit(values: CourseSchema) {
  console.log(values);
}
function RouteComponent() {
  const { data } = Route.useLoaderData();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Edit course</h1>
        <CourseForm onSubmit={onSubmit} data={data} />
      </div>
    </>
  );
}
