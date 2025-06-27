import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/principal/")({
  loader: () => {
    redirect({
      to: "/principal/classes",
      throw: true,
    });
  },
});
