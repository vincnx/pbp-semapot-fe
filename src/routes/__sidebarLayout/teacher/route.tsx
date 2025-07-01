import { SidebarProvider } from "@/components/ui/sidebar";
import TeacherSidebar from "@/features/teacher/components/teacher-sidebar";
import { useAuthStore } from "@/stores/auth";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/teacher")({
  component: RouteComponent,
  beforeLoad: () => {
    const { user } = useAuthStore.getState();
    if (user?.role !== "wali_kelas") {
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
        <TeacherSidebar />
        <Outlet />
      </SidebarProvider>
    </>
  );
}
