import PeriodForm from "@/features/principal/periods/components/period-form";
import type { PeriodSchema } from "@/schemas/period.schema";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/principal/periods/create",
)({
  component: RouteComponent,
  loader: () => ({
    crumb: "create",
  }),
});

function onSubmit(values: PeriodSchema) {
  console.log(values);
}

function RouteComponent() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Create period</h1>
        <PeriodForm onSubmit={onSubmit} />
      </div>
    </>
  );
}
