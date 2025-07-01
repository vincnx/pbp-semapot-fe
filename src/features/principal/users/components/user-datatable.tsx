import { DataTable } from "@/components/data-table";
import { type ColumnDef } from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
}

export function UserDataTable<TData, TValue>(
  props: DataTableProps<TData, TValue>,
) {
  return <DataTable {...props} />;
}
