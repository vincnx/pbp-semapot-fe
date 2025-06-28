import { Toaster } from "@/components/ui/sonner";
import type { QueryClient } from "@tanstack/react-query";
import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: () => (
      <>
        <Outlet />
        <Toaster />
        <TanStackRouterDevtools />
      </>
    ),
    notFoundComponent: () => {
      const emojis = ["(o_0)'", "(=ʘᆽʘ=)", "⊂(￣(ｴ)￣)⊃", "(~_~;)", "(Ｔ▽Ｔ)"];
      return (
        <>
          <div className="flex h-dvh items-center justify-center px-8">
            <div className="flex flex-col gap-8 text-center">
              <h1 className="text-8xl font-bold whitespace-nowrap md:text-9xl">
                {emojis[Math.floor(Math.random() * emojis.length)]}
              </h1>
              <p className="text-xl">
                Ooops, we don't have {location.pathname} route yet
              </p>
            </div>
          </div>
          <div className="fixed bottom-0 w-dvw pb-4 text-center">
            <Link to="/">
              <h4>Semapot</h4>
            </Link>
          </div>
        </>
      );
    },
  },
);
