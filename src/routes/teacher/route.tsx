import { SidebarProvider } from "@/components/ui/sidebar";
import TeacherSidebar from "@/features/teacher/components/teacher-sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/teacher")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SidebarProvider>
        <TeacherSidebar />
        <Outlet />
      </SidebarProvider>
    </>
  );
}
