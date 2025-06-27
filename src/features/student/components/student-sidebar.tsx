import { AppSidebar } from "@/components/app-sidebar";
import { ClipboardCheck } from "lucide-react";

const data = {
  navMain: [
    {
      title: "Reports",
      url: "/student/reports",
      icon: ClipboardCheck,
      items: [],
    },
  ],
  navSecondary: [],
};

const StudentSidebar = () => {
  return (
    <>
      <AppSidebar navMain={data.navMain} navSecondary={data.navSecondary} />
    </>
  );
};

export default StudentSidebar;
