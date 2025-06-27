import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="bg-accent-foreground">
        <div className="mx-auto w-full max-w-screen-2xl">
          <Outlet />
        </div>
      </div>
    </>
  );
}
