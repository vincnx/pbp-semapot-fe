import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Payload {
  id: string;
  role: string;
}

function updateUser(payload: Payload) {
  return axiosInstance.patch(`/kepala-sekolah/users/${payload.id}`, {
    role: payload.role,
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      const response = await updateUser(payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch.unvalidated-users"] });
    },
  });
}
