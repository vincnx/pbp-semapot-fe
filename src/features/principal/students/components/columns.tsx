import { DataTableActions } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-col-header";
import type { User } from "@/types/user.type";
import { useNavigate } from "@tanstack/react-router";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    id: "Class",
    accessorFn: (row) =>
      row.class_students?.length
        ? `${row.class_students?.[0]?.classroom?.grade} ${row.class_students?.[0]?.classroom?.code.toUpperCase()}`
        : "-",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Class" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const navigate = useNavigate();

      const onEdit = () => {
        navigate({
          to: "/principal/students/$studentId/edit",
          params: {
            studentId: row.original.id.toString(),
          },
        });
      };
      const onDelete = () => {
        console.log("delete clicked");
      };

      return <DataTableActions editFn={onEdit} deleteFn={onDelete} />;
    },
  },
];
