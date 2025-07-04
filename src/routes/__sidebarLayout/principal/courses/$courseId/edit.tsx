import Loader from "@/components/loader";
import { toast } from "@/components/ui/sonner";
import { useFetchCourse } from "@/features/principal/hooks/useFetchCourse";
import { useUpdateCourse } from "@/features/principal/hooks/useUpdateCourse";
import CourseForm from "@/features/principal/periods/components/course-form";
import type { CourseSchema } from "@/schemas/course.schema";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/principal/courses/$courseId/edit",
)({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: "edit",
    };
  },
});

function RouteComponent() {
  const { courseId } = Route.useParams();
  const { data, isLoading } = useFetchCourse(courseId);
  const { mutate, isPending } = useUpdateCourse();
  const navigate = useNavigate();

  function onSubmit(values: CourseSchema) {
    mutate(
      {
        id: courseId,
        schema: values,
      },
      {
        onSuccess: () => {
          toast({
            title: "success",
            description: "Course updated successfully",
          });
          navigate({
            to: "/principal/courses",
          });
        },
      },
    );
  }

  if (!data) return <Loader isLoading={isLoading} />;

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Edit course</h1>
        <CourseForm onSubmit={onSubmit} data={data} isLoading={isPending} />
      </div>
    </>
  );
}
