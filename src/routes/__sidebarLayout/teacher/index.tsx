import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/__sidebarLayout/teacher/")({
  loader: () => {
    redirect({
      to: "/teacher/reports",
      throw: true,
    });
  },
});
