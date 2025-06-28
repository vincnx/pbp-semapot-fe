import { axiosInstance } from "@/lib/axios";
import type { Class } from "@/types/class.type";
import type { SuccessResponse } from "@/types/response/base-response.type";
import { useQuery } from "@tanstack/react-query";

function fetchClasses() {
  return axiosInstance.get<SuccessResponse<Class[]>>("/classes");
}

export function useFetchClasses() {
  return useQuery({
    queryKey: ["fetch.classes"],
    queryFn: async () => {
      const response = await fetchClasses();
      return response.data.data;
    },
  });
}
