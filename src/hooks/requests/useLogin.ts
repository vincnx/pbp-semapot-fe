import { axiosInstance } from "@/lib/axios";
import type { LoginSchema } from "@/schemas/login.schema";
import { useAuthStore } from "@/stores/auth";
import type { LoginResponse } from "@/types/response/login-response.type";
import { useMutation } from "@tanstack/react-query";
import { useFetchUserData } from "./useFetchUserData";

function login(schema: LoginSchema) {
  return axiosInstance.post<LoginResponse>("/login", schema);
}

export function useLogin() {
  const { setToken } = useAuthStore();
  const { refetch } = useFetchUserData();

  return useMutation({
    mutationFn: async (schema: LoginSchema) => {
      const response = await login(schema);
      return response.data;
    },
    onSuccess: (resp) => {
      setToken(resp.token);
      refetch();
    },
  });
}
