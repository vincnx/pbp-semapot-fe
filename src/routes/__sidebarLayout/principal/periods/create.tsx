import { toast } from "@/components/ui/sonner";
import { useCreatePeriod } from "@/features/principal/hooks/useCreatePeriod";
import PeriodForm from "@/features/principal/periods/components/period-form";
import type { PeriodSchema } from "@/schemas/period.schema";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/principal/periods/create",
)({
  component: RouteComponent,
  loader: () => ({
    crumb: "create",
  }),
});

function RouteComponent() {
  const { mutate, isPending } = useCreatePeriod();
  const navigate = useNavigate();

  function onSubmit(values: PeriodSchema) {
    mutate(values, {
      onSuccess: () => {
        toast({
          title: "Success",
          description: "Period created successfully",
        });
        navigate({
          to: "/principal/periods",
        });
      },
    });
  }

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Create period</h1>
        <PeriodForm onSubmit={onSubmit} isLoading={isPending} />
      </div>
    </>
  );
}
