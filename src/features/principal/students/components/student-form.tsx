import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { studentSchema, type StudentSchema } from "@/schemas/student.schema";
import type { User } from "@/types/user.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFetchClasses } from "../../hooks/useFetchClasses";

interface StudentFormProps {
  data?: User;
  onSubmit: (values: StudentSchema) => void;
  isLoading?: boolean;
}

const StudentForm = ({ data, onSubmit, isLoading }: StudentFormProps) => {
  const form = useForm<StudentSchema>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      name: data?.name,
      class_id: data?.class_students?.[0]?.classroom_id,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="class_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class</FormLabel>
              <ClassDropdown
                onValueChange={(value) => field.onChange(+value)}
                value={field.value ? field.value : undefined}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          isLoading={isLoading}
          className="bg-accent hover:bg-accent/80 mt-2 w-full border-2"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

const ClassDropdown = (props: React.ComponentProps<typeof Select>) => {
  const { data } = useFetchClasses();

  return (
    <Select {...props}>
      <FormControl>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a class" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {data?.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.grade} {item.code.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default StudentForm;
