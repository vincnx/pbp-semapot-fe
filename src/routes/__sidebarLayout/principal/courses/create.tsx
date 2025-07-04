import { toast } from "@/components/ui/sonner";
import { useCreateCourse } from "@/features/principal/hooks/useCreateCourse";
import CourseForm from "@/features/principal/periods/components/course-form";
import type { CourseSchema } from "@/schemas/course.schema";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/principal/courses/create",
)({
  component: RouteComponent,
  loader: () => ({
    crumb: "Create",
  }),
});

function RouteComponent() {
  const { mutate, isPending } = useCreateCourse();
  const navigate = useNavigate();

  function onSubmit(values: CourseSchema) {
    mutate(values, {
      onSuccess: () => {
        toast({
          title: "success",
          description: "Course created successfully",
        });
        navigate({
          to: "/principal/courses",
        });
      },
      onError: (err) => {
        toast({
          title: "Failed to create course",
          description: err.response?.data.message,
          variant: "destructive",
        });
      },
    });
  }

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Create course</h1>
        <CourseForm onSubmit={onSubmit} isLoading={isPending} />
      </div>
    </>
  );
}
