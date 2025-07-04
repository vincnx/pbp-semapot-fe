import { axiosInstance } from "@/lib/axios";
import type { SuccessResponse } from "@/types/response/base-response.type";
import type { User } from "@/types/user.type";
import { useQuery } from "@tanstack/react-query";

function fetchStudents() {
  return axiosInstance.get<SuccessResponse<User[]>>("/kepala-sekolah/students");
}

export function useFetchStudents() {
  return useQuery({
    queryKey: ["fetch.students"],
    queryFn: async () => {
      const response = await fetchStudents();
      return response.data.data;
    },
  });
}
