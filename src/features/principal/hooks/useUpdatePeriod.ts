import { axiosInstance } from "@/lib/axios";
import type { PeriodSchema } from "@/schemas/period.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Payload {
  id: string;
  schema: PeriodSchema;
}

function updatePeriod(payload: Payload) {
  return axiosInstance.put(`/kepala-sekolah/periods/${payload.id}`, {
    ...payload.schema,
  });
}

export function useUpdatePeriod() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      const response = await updatePeriod(payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch.periods"] });
    },
  });
}
