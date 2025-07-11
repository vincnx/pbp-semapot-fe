import { DataTableActions } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-col-header";
import type { Report } from "@/types/report.type";
import { useNavigate } from "@tanstack/react-router";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Report>[] = [
  {
    id: "student",
    accessorFn: (row) => row.student.name,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Student" />
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
    id: "class year",
    accessorFn: (row) => row.class.year,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Class year" />
    ),
  },
  {
    id: "period",
    accessorFn: (row) => `${row.period.year} sem ${row.period.semester}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="period" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const navigate = useNavigate();

      const onEdit = () => {
        navigate({
          to: "/teacher/reports/$reportId/edit",
          params: {
            reportId: row.original.id,
          },
        });
      };

      return <DataTableActions editFn={onEdit} />;
    },
  },
];
