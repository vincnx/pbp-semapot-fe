import { axiosInstance } from "@/lib/axios";
import { useAuthStore } from "@/stores/auth";
import type { UserDataResponse } from "@/types/response/user-data-response.type";
import { useQuery } from "@tanstack/react-query";

function fetchUserData() {
  return axiosInstance.get<UserDataResponse>("/user");
}

export function useFetchUserData() {
  const { setUser } = useAuthStore();

  return useQuery({
    queryKey: ["fetch.user"],
    queryFn: async () => {
      const response = await fetchUserData();
      setUser(response.data);
      return response.data;
    },
    enabled: false,
  });
}
