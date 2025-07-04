import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useState } from "react";

function deleteCourse(id: string) {
  return axiosInstance.delete(`/kepala-sekolah/courses/${id}`);
}

export function useDeleteCourse() {
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | undefined>(undefined);

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await deleteCourse(id);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch.courses"] });
    },
    onError: (err: AxiosError<{ message: string }>) => {
      setError(err.response?.data.message);
    },
  });

  return { ...mutation, error };
}
