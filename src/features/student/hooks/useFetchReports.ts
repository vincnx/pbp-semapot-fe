import { axiosInstance } from "@/lib/axios";
import type { Report } from "@/types/report.type";
import type { SuccessResponse } from "@/types/response/base-response.type";
import { useQuery } from "@tanstack/react-query";

function fetchReports() {
  return axiosInstance.get<SuccessResponse<Report[]>>("/murid/history");
}

export function useFetchReports() {
  return useQuery({
    queryKey: ["fetch.reports"],
    queryFn: async () => {
      const response = await fetchReports();
      return response.data.data;
    },
  });
}
