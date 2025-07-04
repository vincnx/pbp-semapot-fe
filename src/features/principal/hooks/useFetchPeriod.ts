import { axiosInstance } from "@/lib/axios";
import type { Period } from "@/types/period.type";
import type { SuccessResponse } from "@/types/response/base-response.type";
import { useQuery } from "@tanstack/react-query";

function fetchPeriod(id: string) {
  return axiosInstance.get<SuccessResponse<Period>>(
    `/kepala-sekolah/periods/${id}`,
  );
}

export function useFetchPeriod(id: string) {
  return useQuery({
    queryKey: ["fetch.periods", id],
    queryFn: async () => {
      const response = await fetchPeriod(id);
      return response.data.data;
    },
  });
}
