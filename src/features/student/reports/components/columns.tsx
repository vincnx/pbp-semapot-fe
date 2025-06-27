import { DataTableActions } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-col-header";
import type { Report } from "@/types/report.type";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Report>[] = [
  {
    id: "period",
    accessorFn: (row) => `${row.period.year} sem ${row.period.semester}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="period" />
    ),
  },
  {
    id: "class",
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
