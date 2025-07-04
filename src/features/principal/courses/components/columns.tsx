import { DataTableActions } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-col-header";
import { toast } from "@/components/ui/sonner";
import type { Course } from "@/types/course.type";
import { useNavigate } from "@tanstack/react-router";
import { type ColumnDef } from "@tanstack/react-table";
import { useDeleteCourse } from "../../hooks/useDeleteCourse";

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const navigate = useNavigate();
      const { mutate } = useDeleteCourse();

      const onEdit = () => {
        navigate({
          to: "/principal/courses/$courseId/edit",
          params: { courseId: row.original.id.toString() },
        });
      };
      const onDelete = () => {
        mutate(row.original.id.toString(), {
          onSuccess: () => {
            toast({
              title: "success",
              description: "Course deleted successfully",
            });
          },
          onError: (err) => {
            toast({
              title: "Failed to delete course",
              description: err.response?.data.message,
              variant: "destructive",
            });
          },
        });
      };

      return <DataTableActions editFn={onEdit} deleteFn={onDelete} />;
    },
  },
];
