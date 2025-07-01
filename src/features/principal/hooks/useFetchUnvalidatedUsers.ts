import { axiosInstance } from "@/lib/axios";
import type { SuccessResponse } from "@/types/response/base-response.type";
import type { User } from "@/types/user.type";
import { useQuery } from "@tanstack/react-query";

function fetchUnvalidatedUsers() {
  return axiosInstance.get<SuccessResponse<User[]>>(
    "/kepala-sekolah/unvalidated-users",
  );
}

export function useFetchUnvalidatedUsers() {
  return useQuery({
    queryKey: ["fetch.unvalidated-users"],
    queryFn: async () => {
      const response = await fetchUnvalidatedUsers();
      return response.data.data;
    },
  });
}
