import { AppSidebar } from "@/components/app-sidebar";
import { ClipboardCheck } from "lucide-react";

const data = {
  navMain: [
    {
      title: "Reports",
      url: "/teacher/reports",
      icon: ClipboardCheck,
      items: [],
    },
  ],
  navSecondary: [],
};

const TeacherSidebar = () => {
  return (
    <>
      <AppSidebar navMain={data.navMain} navSecondary={data.navSecondary} />
    </>
  );
};

export default TeacherSidebar;
