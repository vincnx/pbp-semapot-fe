import { axiosInstance } from "@/lib/axios";
import type { CourseSchema } from "@/schemas/course.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useState } from "react";

function createCourse(schema: CourseSchema) {
  return axiosInstance.post("/kepala-sekolah/courses", schema);
}

export function useCreateCourse() {
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | undefined>(undefined);

  const mutation = useMutation({
    mutationFn: async (schema: CourseSchema) => {
      const response = await createCourse(schema);
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
