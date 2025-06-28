import { axiosInstance } from "@/lib/axios";
import type { Class } from "@/types/class.type";
import type { SuccessResponse } from "@/types/response/base-response.type";
import { useQuery } from "@tanstack/react-query";

function fetchClass(id: string) {
  return axiosInstance.get<SuccessResponse<Class>>(`/classes/${id}`);
}

export function useFetchClass(id: string) {
  return useQuery({
    queryKey: ["fetch.classes", id],
    queryFn: async () => {
      const response = await fetchClass(id);
      return response.data.data;
    },
  });
}
