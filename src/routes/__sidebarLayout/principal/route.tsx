import { SidebarProvider } from "@/components/ui/sidebar";
import PrincipalSidebar from "@/features/principal/components/principal-sidebar";
import { useAuthStore } from "@/stores/auth";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/principal")({
  component: RouteComponent,
  beforeLoad: () => {
    const { user } = useAuthStore.getState();
    if (user?.role !== "kepala_sekolah") {
      redirect({
        to: "/auth/login",
        throw: true,
      });
    }
  },
});

function RouteComponent() {
  return (
    <>
      <SidebarProvider>
        <PrincipalSidebar />
        <Outlet />
      </SidebarProvider>
    </>
  );
}
