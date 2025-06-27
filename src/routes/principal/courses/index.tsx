import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/principal/courses/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>hello courses page</h1>
      </div>
    </>
  );
}
