import { DataTableActions } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-col-header";
import type { Class } from "@/types/class.type";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Class>[] = [
  {
    accessorKey: "grade",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Grade" />
    ),
  },
  {
    id: "code",
    accessorFn: (row) => row.code.toUpperCase(),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Code" />
    ),
  },
  {
    accessorKey: "year",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="School Year" />
    ),
  },
  {
    id: "class_teacher",
    accessorFn: (row) => row.user.name,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Class Teacher" />
    ),
  },
  {
    id: "actions",
    cell: () => {
      // TODO: edit this callback
      const onDetail = () => {
        console.log("detail clicked");
      };
      const onEdit = () => {
        console.log("edit clicked");
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
