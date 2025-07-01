import { useAuthStore } from "@/stores/auth";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
  beforeLoad: () => {
    const { token } = useAuthStore.getState();
    if (token) {
      redirect({
        to: "/",
        throw: true,
      });
    }
  },
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
