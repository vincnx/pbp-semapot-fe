import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/student/")({
  loader: () => {
    redirect({
      to: "/student/reports",
      throw: true,
    });
  },
});
