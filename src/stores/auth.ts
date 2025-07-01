import type { User } from "@/types/user.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  token?: string;
  user?: User;
  setToken(newToken: string | undefined): void;
  setUser(newUser: User | undefined): void;
  logout(): void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: undefined,
      user: undefined,
      setToken: (newToken: string | undefined) => set({ token: newToken }),
      setUser: (newUser: User | undefined) => set({ user: newUser }),
      logout: () => set({ token: undefined, user: undefined }),
    }),
    {
      name: "auth",
    },
  ),
);
