import { DataTableActions } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-col-header";
import type { Student } from "@/types/student.type";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    id: "Class",
    accessorFn: (row) => `${row.class.grade} ${row.class.code.toUpperCase()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Class" />
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
