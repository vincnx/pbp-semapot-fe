import { axiosInstance } from "@/lib/axios";
import type { ClassSchema } from "@/schemas/class.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Payload {
  id: string;
  schema: ClassSchema;
}

function editClass(payload: Payload) {
  return axiosInstance.put(
    `/kepala-sekolah/kelas/${payload.id}`,
    payload.schema,
  );
}

export function useEditClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      const response = await editClass(payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch.classes"] });
    },
  });
}
