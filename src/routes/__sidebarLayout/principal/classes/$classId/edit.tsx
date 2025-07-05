import { toast } from "@/components/ui/sonner";
import ClassForm from "@/features/principal/classes/components/class-form";
import { useEditClass } from "@/features/principal/hooks/useEditClass";
import { useFetchClass } from "@/features/principal/hooks/useFetchClass";
import type { ClassSchema } from "@/schemas/class.schema";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/principal/classes/$classId/edit",
)({
  component: RouteComponent,
  loader: () => ({
    crumb: "Edit",
  }),
});

function RouteComponent() {
  const { classId } = Route.useParams();
  const { data } = useFetchClass(classId);
  const { mutate, isPending } = useEditClass();
  const navigate = useNavigate();

  function onSubmit(values: ClassSchema) {
    mutate(
      {
        id: classId,
        schema: values,
      },
      {
        onSuccess: () => {
          toast({
            title: "Class sucessfuly edited",
          });
          navigate({ to: "/principal/classes" });
        },
        onError: (err) => {
          toast({
            title: "Failed to edit class",
            description: err.response?.data.message,
            variant: "destructive",
          });
        },
      },
    );
  }

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>edit class</h1>
        <ClassForm onSubmit={onSubmit} isLoading={isPending} data={data} />
      </div>
    </>
  );
}
