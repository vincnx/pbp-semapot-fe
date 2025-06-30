import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function deleteClass(id: string) {
  return axiosInstance.delete(`/kepala-sekolah/kelas/${id}`);
}

export function useDeleteClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await deleteClass(id);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch.classes"] });
    },
  });
}
