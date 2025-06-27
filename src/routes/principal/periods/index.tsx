import { columns } from "@/features/principal/periods/components/columnts";
import { PeriodDataTable } from "@/features/principal/periods/components/period-datatable";
import type { Period } from "@/types/period.type";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/principal/periods/")({
  component: RouteComponent,
  loader: async () => {
    const data = await getData();
    return { data };
  },
});

async function getData(): Promise<Period[]> {
  return [
    {
      id: "728ed52f",
      year: "2024",
      semester: "1",
      is_active: 0,
    },
    {
      id: "728ed52g",
      year: "2024",
      semester: "2",
      is_active: 0,
    },
    {
      id: "728ed52h",
      year: "2025",
      semester: "1",
      is_active: 0,
    },
    {
      id: "728ed52j",
      year: "2025",
      semester: "2",
      is_active: 1,
    },
  ];
}

function RouteComponent() {
  const { data } = Route.useLoaderData();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Periods data</h1>
        <PeriodDataTable columns={columns} data={data} />
      </div>
    </>
  );
}
