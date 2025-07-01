import { toast } from "@/components/ui/sonner";
import { axiosInstance } from "@/lib/axios";
import type { LoginSchema } from "@/schemas/login.schema";
import { useAuthStore } from "@/stores/auth";
import type { LoginResponse } from "@/types/response/login-response.type";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import type { AxiosError } from "axios";
import { useFetchUserData } from "./useFetchUserData";

function login(schema: LoginSchema) {
  return axiosInstance.post<LoginResponse>("/login", schema);
}

export function useLogin() {
  const { setToken } = useAuthStore();
  const { refetch } = useFetchUserData();
  const navigate = useNavigate();
  let error: undefined | string = undefined;

  const mutation = useMutation({
    mutationFn: async (schema: LoginSchema) => {
      const response = await login(schema);
      return response.data;
    },
    onSuccess: async (resp) => {
      setToken(resp.token);
      const userData = await refetch();
      toast({
        title: "Login Success",
        description: `Welcome to the app ${userData.data?.name} 👋`,
        variant: "success",
      });
      navigate({ to: "/" });
    },
    onError: (err: AxiosError<{ error: string }>) => {
      error = err.response?.data.error;
    },
  });

  return { ...mutation, error };
}
