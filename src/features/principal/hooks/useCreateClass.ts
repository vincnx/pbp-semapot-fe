import { axiosInstance } from "@/lib/axios";
import type { ClassSchema } from "@/schemas/class.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function createClass(schema: ClassSchema) {
  return axiosInstance.post("/kepala-sekolah/kelas", schema);
}

export function useCreateClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (schema: ClassSchema) => {
      const response = await createClass(schema);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch.classes"] });
    },
  });
}
