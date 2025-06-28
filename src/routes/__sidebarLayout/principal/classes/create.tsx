import { toast } from "@/components/ui/sonner";
import ClassForm from "@/features/principal/classes/components/class-form";
import { useCreateClass } from "@/features/principal/hooks/useCreateClass";
import type { ClassSchema } from "@/schemas/class.schema";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/principal/classes/create",
)({
  component: RouteComponent,
  loader: () => ({
    crumb: "Create",
  }),
});

function RouteComponent() {
  const { mutate, isPending } = useCreateClass();
  const navigate = useNavigate();

  function onSubmit(values: ClassSchema) {
    mutate(values, {
      onSuccess: () => {
        toast({
          title: "Class sucessfuly created",
        });
        navigate({ to: "/principal/classes" });
      },
    });
  }

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>create class</h1>
        <ClassForm onSubmit={onSubmit} isLoading={isPending} />
      </div>
    </>
  );
}
