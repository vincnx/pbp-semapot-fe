import { DataTable } from "@/components/data-table";
import { type ColumnDef } from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function CourseDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  return <DataTable data={data} columns={columns} />;
}
