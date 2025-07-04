import { axiosInstance } from "@/lib/axios";
import type { PeriodSchema } from "@/schemas/period.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function createPeriod(schema: PeriodSchema) {
  return axiosInstance.post("/kepala-sekolah/periods", schema);
}

export function useCreatePeriod() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (schema: PeriodSchema) => {
      const response = await createPeriod(schema);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch.periods"] });
    },
  });
}
