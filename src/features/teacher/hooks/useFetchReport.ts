import { axiosInstance } from "@/lib/axios";
import type { Report } from "@/types/report.type";
import type { SuccessResponse } from "@/types/response/base-response.type";
import { useQuery } from "@tanstack/react-query";

function fetchReport(id: string) {
  return axiosInstance.get<SuccessResponse<Report>>(`/walikelas/report/${id}`);
}

export function useFetchReport(id: string) {
  return useQuery({
    queryKey: ["fetch.reports", id],
    queryFn: async () => {
      const response = await fetchReport(id);
      return response.data.data;
    },
  });
}
