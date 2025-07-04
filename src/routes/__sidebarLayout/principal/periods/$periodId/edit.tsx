import Loader from "@/components/loader";
import { toast } from "@/components/ui/sonner";
import { useFetchPeriod } from "@/features/principal/hooks/useFetchPeriod";
import { useUpdatePeriod } from "@/features/principal/hooks/useUpdatePeriod";
import PeriodForm from "@/features/principal/periods/components/period-form";
import type { PeriodSchema } from "@/schemas/period.schema";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/principal/periods/$periodId/edit",
)({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: "edit",
    };
  },
});

function RouteComponent() {
  const { periodId } = Route.useParams();
  const { data, isLoading } = useFetchPeriod(periodId);
  const { mutate, isPending } = useUpdatePeriod();
  const navigate = useNavigate();

  function onSubmit(values: PeriodSchema) {
    mutate(
      {
        id: periodId,
        schema: values,
      },
      {
        onSuccess: () => {
          toast({
            title: "success",
            description: "Period updated successfully",
          });
          navigate({
            to: "/principal/periods",
          });
        },
      },
    );
  }

  if (!data) return <Loader isLoading={isLoading} />;

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Edit periods</h1>
        <PeriodForm data={data} onSubmit={onSubmit} isLoading={isPending} />
      </div>
    </>
  );
}
