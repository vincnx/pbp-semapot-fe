import NavBreadcrumb from "@/components/nav-breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/principal/users")({
  component: RouteComponent,
  loader: () => ({
    crumb: "Users",
  }),
});

function RouteComponent() {
  return (
    <>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-4"
            />
            <NavBreadcrumb />
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </>
  );
}
