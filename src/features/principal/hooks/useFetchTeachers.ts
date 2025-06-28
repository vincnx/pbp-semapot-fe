import { axiosInstance } from "@/lib/axios";
import type { SuccessResponse } from "@/types/response/base-response.type";
import type { User } from "@/types/user.type";
import { useQuery } from "@tanstack/react-query";

function fetchTeachers() {
  return axiosInstance.get<SuccessResponse<User[]>>("/wali-kelas");
}

export function useFetchTeachers() {
  return useQuery({
    queryKey: ["fetch.teachers"],
    queryFn: async () => {
      const response = await fetchTeachers();
      return response.data.data;
    },
  });
}
