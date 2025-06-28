import { DataTableActions } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-col-header";
import type { Course } from "@/types/course.type";
import { useNavigate } from "@tanstack/react-router";
import { type ColumnDef } from "@tanstack/react-table";

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

      const onDetail = () => {
        console.log("detail clicked");
      };
      const onEdit = () => {
        navigate({
          to: "/principal/courses/$courseId/edit",
          params: { courseId: row.original.id.toString() },
        });
      };
      const onDelete = () => {
        console.log("delete clicked");
      };

      return (
        <DataTableActions
          detailFn={onDetail}
          editFn={onEdit}
          deleteFn={onDelete}
        />
      );
    },
  },
];
