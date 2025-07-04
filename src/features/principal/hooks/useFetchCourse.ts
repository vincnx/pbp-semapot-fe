import { axiosInstance } from "@/lib/axios";
import type { Course } from "@/types/course.type";
import type { SuccessResponse } from "@/types/response/base-response.type";
import { useQuery } from "@tanstack/react-query";

function fetchCourse(id: string) {
  return axiosInstance.get<SuccessResponse<Course>>(
    `/kepala-sekolah/courses/${id}`,
  );
}

export function useFetchCourse(id: string) {
  return useQuery({
    queryKey: ["fetch.courses", id],
    queryFn: async () => {
      const response = await fetchCourse(id);
      return response.data.data;
    },
  });
}
