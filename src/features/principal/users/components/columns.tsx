import Alert from "@/components/alert";
import { DataTableColumnHeader } from "@/components/data-table-col-header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { User } from "@/types/user.type";
import { type ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { useUpdateUser } from "../../hooks/useUpdateUser";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <DialogValidation id={row.original.id.toString()} />;
    },
  },
];

function DialogValidation({ id }: { id: string }) {
  const [role, setRole] = useState<string>("");
  const { mutate: updateUser, isPending } = useUpdateUser();

  const handleSubmit = () => {
    updateUser({ id, role });
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">validate</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Validate user</DialogTitle>
            <DialogDescription>
              Add role to the user and validate the user
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label>Role</Label>
              <Select
                value={role}
                onValueChange={(value: string) => setRole(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wali_kelas">Teacher</SelectItem>
                  <SelectItem value="murid">Student</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="flex-1">
                Cancel
              </Button>
            </DialogClose>
            <Alert onConfirm={handleSubmit}>
              <Button
                isLoading={isPending}
                disabled={!role}
                variant={"outline"}
                className="bg-accent hover:bg-accent/80 flex-1"
              >
                Validate
              </Button>
            </Alert>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
