import { axiosInstance } from "@/lib/axios";
import type { CourseSchema } from "@/schemas/course.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Payload {
  id: string;
  schema: CourseSchema;
}

function updateCourse(payload: Payload) {
  return axiosInstance.put(`/kepala-sekolah/courses/${payload.id}`, {
    ...payload.schema,
  });
}

export function useUpdateCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      const response = await updateCourse(payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch.courses"] });
    },
  });
}
