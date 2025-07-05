import Loader from "@/components/loader";
import { toast } from "@/components/ui/sonner";
import { useFetchStudent } from "@/features/principal/hooks/useFetchStudent";
import { useUpdateClassStudent } from "@/features/principal/hooks/useUpdateClassStudent";
import StudentForm from "@/features/principal/students/components/student-form";
import type { StudentSchema } from "@/schemas/student.schema";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/principal/students/$studentId/edit",
)({
  component: RouteComponent,
});

function RouteComponent() {
  const { studentId } = Route.useParams();
  const { data, isLoading } = useFetchStudent(studentId);
  const { mutate, isPending } = useUpdateClassStudent();
  const navigate = useNavigate();

  function onSubmit(values: StudentSchema) {
    mutate(
      {
        id: studentId,
        schema: values,
      },
      {
        onSuccess: () => {
          toast({
            title: "Success",
            description: "Student updated successfully",
          });
          navigate({
            to: "/principal/students",
          });
        },
        onError: (err) => {
          toast({
            title: "Failed to update student",
            description: err.response?.data.message,
            variant: "destructive",
          });
        },
      },
    );
  }

  if (!data) return <Loader isLoading={isLoading} />;

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Edit student</h1>
        <StudentForm data={data} onSubmit={onSubmit} isLoading={isPending} />
      </div>
    </>
  );
}
