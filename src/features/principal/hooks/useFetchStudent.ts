import { axiosInstance } from "@/lib/axios";
import type { SuccessResponse } from "@/types/response/base-response.type";
import type { User } from "@/types/user.type";
import { useQuery } from "@tanstack/react-query";

function fetchStudent(id: string) {
  return axiosInstance.get<SuccessResponse<User>>(
    `/kepala-sekolah/students/${id}`,
  );
}

export function useFetchStudent(id: string) {
  return useQuery({
    queryKey: ["fetch.students", id],
    queryFn: async () => {
      const response = await fetchStudent(id);
      return response.data.data;
    },
  });
}
