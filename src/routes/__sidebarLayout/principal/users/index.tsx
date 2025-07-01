import { useFetchUnvalidatedUsers } from "@/features/principal/hooks/useFetchUnvalidatedUsers";
import { columns } from "@/features/principal/users/components/columns";
import { UserDataTable } from "@/features/principal/users/components/user-datatable";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/principal/users/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useFetchUnvalidatedUsers();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>User validation</h1>
        <UserDataTable columns={columns} data={data ?? []} />
      </div>
    </>
  );
}
