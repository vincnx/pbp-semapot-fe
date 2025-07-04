import { axiosInstance } from "@/lib/axios";
import type { Period } from "@/types/period.type";
import type { SuccessResponse } from "@/types/response/base-response.type";
import { useQuery } from "@tanstack/react-query";

function fetchPeriods() {
  return axiosInstance.get<SuccessResponse<Period[]>>(
    "/kepala-sekolah/periods",
  );
}

export function useFetchPeriods() {
  return useQuery({
    queryKey: ["fetch.periods"],
    queryFn: async () => {
      const response = await fetchPeriods();
      return response.data.data;
    },
  });
}
