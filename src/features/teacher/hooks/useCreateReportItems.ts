import { axiosInstance } from "@/lib/axios";
import type { ReportSchema } from "@/schemas/report.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Payload {
  schema: ReportSchema;
  reportId: number;
}

function createReportItems(payload: Payload) {
  return axiosInstance.post(
    `/walikelas/report/${payload.reportId}`,
    payload.schema,
  );
}

export function useCreateReportItems() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      const response = await createReportItems(payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch.reports"] });
    },
  });
}
