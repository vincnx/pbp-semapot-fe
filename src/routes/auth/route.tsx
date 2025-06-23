import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex h-dvh w-dvw items-center justify-center px-8">
        <Outlet />
      </div>
      <div className="fixed bottom-0 w-dvw pb-4 text-center">
        <h4>Semapot</h4>
      </div>
    </>
  );
}
