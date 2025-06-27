import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/principal/periods/create",
)({
  component: RouteComponent,
  loader: () => ({
    crumb: "create",
  }),
});

function RouteComponent() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>hello create periods page</h1>
      </div>
    </>
  );
}
