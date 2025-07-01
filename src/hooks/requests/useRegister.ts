import { axiosInstance } from "@/lib/axios";
import type { RegisterSchema } from "@/schemas/register.schema";
import { useMutation } from "@tanstack/react-query";

function register(schema: RegisterSchema) {
  return axiosInstance.post("/register", schema);
}

export function useRegister() {
  return useMutation({
    mutationFn: async (schema: RegisterSchema) => {
      const response = await register(schema);
      return response.data;
    },
  });
}
