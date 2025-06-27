import {
  BookIcon,
  CalendarRange,
  LifeBuoy,
  School,
  Send,
  UsersRound,
} from "lucide-react";
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

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Periods",
      url: "/principal/periods",
      icon: CalendarRange,
      isActive: true,
      items: [
        {
          title: "Create",
          url: "/principal/periods/create",
        },
      ],
    },
    {
      title: "Courses",
      url: "/principal/courses",
      icon: BookIcon,
      items: [
        {
          title: "Create",
          url: "/principal/courses/create",
        },
      ],
    },
    {
      title: "Students",
      url: "/principal/students",
      icon: UsersRound,
      items: [
        {
          title: "Create",
          url: "/principal/students/create",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
