import { School, type LucideIcon } from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/stores/auth";

interface NavMain {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}

interface NavSecondary {
  title: string;
  url: string;
  icon: LucideIcon;
}

// const data = {
//   user: {
//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   navMain: [
//     {
//       title: "Periods",
//       url: "/principal/periods",
//       icon: CalendarRange,
//       isActive: true,
//       items: [
//         {
//           title: "Create",
//           url: "/principal/periods/create",
//         },
//       ],
//     },
//     {
//       title: "Courses",
//       url: "/principal/courses",
//       icon: BookIcon,
//       items: [
//         {
//           title: "Create",
//           url: "/principal/courses/create",
//         },
//       ],
//     },
//     {
//       title: "Students",
//       url: "/principal/students",
//       icon: UsersRound,
//       items: [
//         {
//           title: "Create",
//           url: "/principal/students/create",
//         },
//       ],
//     },
//     {
//       title: "Classes",
//       url: "/principal/classes",
//       icon: School2,
//       items: [
//         {
//           title: "Create",
//           url: "/principal/classes/create",
//         },
//       ],
//     },
//   ],
//   navSecondary: [
//     {
//       title: "Support",
//       url: "#",
//       icon: LifeBuoy,
//     },
//     {
//       title: "Feedback",
//       url: "#",
//       icon: Send,
//     },
//   ],
// };

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  navMain?: NavMain[];
  navSecondary?: NavSecondary[];
}

export function AppSidebar({
  navMain,
  navSecondary,
  ...props
}: AppSidebarProps) {
  const { user } = useAuthStore();

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-accent text-accent-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                  <School className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Semapot</span>
                  <span className="truncate text-xs">SD abcdedfg</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {navMain && navMain?.length ? <NavMain items={navMain} /> : ""}
        {navSecondary && navSecondary?.length ? (
          <NavSecondary items={navSecondary} className="mt-auto" />
        ) : (
          ""
        )}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
