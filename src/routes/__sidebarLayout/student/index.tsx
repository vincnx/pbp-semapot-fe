import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/student/")({
  loader: () => {
    redirect({
      to: "/student/reports",
      throw: true,
    });
  },
});
