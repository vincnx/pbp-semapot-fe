import PeriodForm from "@/features/principal/periods/components/period-form";
import type { PeriodSchema } from "@/schemas/period.schema";
import type { Period } from "@/types/period.type";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/principal/periods/$periodId/edit",
)({
  component: RouteComponent,
  loader: async ({ params }) => {
    const data = await getData(params.periodId);
    return {
      data,
      crumb: "edit",
    };
  },
});

async function getData(periodId: string): Promise<Period> {
  // TODO: get data from api
  return {
    id: "1",
    year: "2025",
    semester: "1",
    is_active: 1,
  };
}

function onSubmit(values: PeriodSchema) {
  console.log(values);
}

function RouteComponent() {
  const { data } = Route.useLoaderData();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Edit periods</h1>
        <PeriodForm data={data} onSubmit={onSubmit} />
      </div>
    </>
  );
}
