import { useAuthStore } from "@/stores/auth";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
  component: App,
  loader: () => {
    const { user } = useAuthStore.getState();
    if (user?.role === "wali kelas") {
      redirect({
        to: "/teacher",
        throw: true,
      });
    } else if (user?.role === "kepala_sekolah") {
      redirect({
        to: "/principal",
        throw: true,
      });
    }
  },
});

function App() {
  return (
    <div className="text-center">
      <header className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-[calc(10px+2vmin)] text-white">
        <img
          src={logo}
          className="pointer-events-none h-[40vmin] animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        {/* TODO: remove this */}
        <Link to="/auth/login">Login page</Link>
        <Link to="/principal">Principal page</Link>
        <Link to="/teacher">Teacher page</Link>
        <Link to="/student">Student page</Link>
        {/* <a
          className="text-[#61dafb] hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a> */}
      </header>
    </div>
  );
}
