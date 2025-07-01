import { SidebarProvider } from "@/components/ui/sidebar";
import StudentSidebar from "@/features/student/components/student-sidebar";
import { useAuthStore } from "@/stores/auth";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/student")({
  component: RouteComponent,
  beforeLoad: () => {
    const { user } = useAuthStore.getState();
    if (user?.role !== "murid") {
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
        <StudentSidebar />
        <Outlet />
      </SidebarProvider>
    </>
  );
}
