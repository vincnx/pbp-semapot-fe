import { AppSidebar } from "@/components/app-sidebar";
import {
  BookIcon,
  CalendarRange,
  School2,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

const data = {
  navMain: [
    {
      title: "Periods",
      url: "/principal/periods",
      icon: CalendarRange,
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
      items: [],
    },
    {
      title: "Classes",
      url: "/principal/classes",
      icon: School2,
      items: [
        {
          title: "Create",
          url: "/principal/classes/create",
        },
      ],
    },
    {
      title: "Users",
      url: "/principal/users",
      icon: UserRoundCheck,
      items: [],
    },
  ],
  navSecondary: [],
};

const PrincipalSidebar = () => {
  return (
    <>
      <AppSidebar navMain={data.navMain} navSecondary={data.navSecondary} />
    </>
  );
};

export default PrincipalSidebar;
