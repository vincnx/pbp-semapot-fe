import { axiosInstance } from "@/lib/axios";
import type { Course } from "@/types/course.type";
import type { SuccessResponse } from "@/types/response/base-response.type";
import { useQuery } from "@tanstack/react-query";

function fetchCourses() {
  return axiosInstance.get<SuccessResponse<Course[]>>("/walikelas/courses");
}

export function useFetchCourses() {
  return useQuery({
    queryKey: ["fetch.courses"],
    queryFn: async () => {
      const response = await fetchCourses();
      return response.data.data;
    },
  });
}
