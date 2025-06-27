import { SidebarProvider } from "@/components/ui/sidebar";
import PrincipalSidebar from "@/features/principal/components/principal-sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/principal")({
  component: RouteComponent,
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
