import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useState } from "react";

function deleteClass(id: string) {
  return axiosInstance.delete(`/kepala-sekolah/kelas/${id}`);
}

export function useDeleteClass() {
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | undefined>(undefined);

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await deleteClass(id);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch.classes"] });
    },
    onError: (err: AxiosError<{ message: string }>) => {
      setError(err.response?.data.message);
    },
  });

  return { ...mutation, error };
}
