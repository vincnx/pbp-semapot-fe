import LoginForm from "@/features/login/components/LoginForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="bg-accent outline-foreground flex w-full max-w-lg flex-col gap-8 rounded-xl p-4 outline-3 outline-offset-4">
        <h2 className="text-primary-foreground">Login</h2>
        <LoginForm />
        <p className="text-foreground text-center">
          Don't have an account? Register
        </p>
      </div>
    </>
  );
}
