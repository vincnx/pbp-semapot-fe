import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/principal/students/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>hello students page</h1>
      </div>
    </>
  );
}
