import { DataTableActions } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-col-header";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Period } from "@/types/period.type";
import { useNavigate } from "@tanstack/react-router";
import { type ColumnDef } from "@tanstack/react-table";
import { useDeletePeriod } from "../../hooks/useDeletePeriod";

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
    accessorFn: (row) =>
      statusFormatter[row.status as keyof typeof statusFormatter],
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const { color, label } = row.original.status
        ? statusFormatter[row.original.status as keyof typeof statusFormatter]
        : statusFormatter.pending;

      return (
        <Badge className={cn(color, "text-background")} variant={"outline"}>
          {label}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      if (row.original.status === "selesai") return;

      const navigate = useNavigate();
      const { mutate } = useDeletePeriod();

      const onEdit = () => {
        navigate({
          to: "/principal/periods/$periodId/edit",
          params: { periodId: row.original.id.toString() },
        });
      };
      const onDelete = () => {
        mutate(row.original.id.toString(), {
          onSuccess: () => {
            toast({
              title: "success",
              description: "Period deleted successfully",
            });
          },
        });
      };

      return (
        <DataTableActions
          editFn={onEdit}
          deleteFn={row.original.status !== "aktif" ? onDelete : undefined}
        />
      );
    },
  },
];

const statusFormatter = {
  aktif: {
    label: "active",
    color: "bg-green-600",
  },
  pending: {
    label: "pending",
    color: "bg-gray-400",
  },
  selesai: {
    label: "done",
    color: "bg-red-600",
  },
};
