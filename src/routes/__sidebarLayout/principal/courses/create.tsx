import CourseForm from "@/features/principal/periods/components/course-form";
import type { CourseSchema } from "@/schemas/course.schema";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/principal/courses/create",
)({
  component: RouteComponent,
  loader: () => ({
    crumb: "Create",
  }),
});

function onSubmit(values: CourseSchema) {
  console.log(values);
}
function RouteComponent() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Create course</h1>
        <CourseForm onSubmit={onSubmit} />
      </div>
    </>
  );
}
