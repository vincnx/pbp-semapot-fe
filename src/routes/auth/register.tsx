import RegisterForm from "@/features/login/components/RegisterForm";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="bg-accent outline-foreground flex w-full max-w-lg flex-col gap-8 rounded-xl p-4 outline-3 outline-offset-4">
        <h2 className="text-primary-foreground">Register</h2>
        <RegisterForm />
        <p className="text-foreground text-center">
          Already have an account?
          <Link to="/auth/login">Login</Link>
        </p>
      </div>
    </>
  );
}
