import { DataTableActions } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-col-header";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Period } from "@/types/period.type";
import { useNavigate } from "@tanstack/react-router";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Period>[] = [
  {
    accessorKey: "year",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Year" />
    ),
  },
  {
    accessorKey: "semester",
    header: "Semester",
  },
  {
    id: "is_active",
    accessorFn: (row) => (row.is_active === 1 ? "active" : "inactive"),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const color = row.original.is_active ? "bg-green-600" : "bg-red-600";

      return (
        <Badge className={cn(color, "text-background")} variant={"outline"}>
          {row.getValue("is_active")}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const navigate = useNavigate();
      // TODO: edit this callback
      const onDetail = () => {
        console.log("detail clicked");
      };
      const onEdit = () => {
        navigate({
          to: "/principal/periods/$periodId/edit",
          params: { periodId: row.original.id },
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
