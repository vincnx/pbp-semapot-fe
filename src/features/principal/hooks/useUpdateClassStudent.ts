import { axiosInstance } from "@/lib/axios";
import type { StudentSchema } from "@/schemas/student.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useState } from "react";

interface Payload {
  id: string;
  schema: StudentSchema;
}

function updateClassStudent(payload: Payload) {
  return axiosInstance.post(
    `/kepala-sekolah/students/move-student/${payload.id}`,
    {
      ...payload.schema,
    },
  );
}

export function useUpdateClassStudent() {
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | undefined>(undefined);

  const mutation = useMutation({
    mutationFn: async (payload: Payload) => {
      const response = await updateClassStudent(payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch.students"] });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      setError(error.response?.data.message);
    },
  });

  return { ...mutation, error };
}
