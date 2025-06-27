import { SidebarProvider } from "@/components/ui/sidebar";
import StudentSidebar from "@/features/student/components/student-sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/student")({
  component: RouteComponent,
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
