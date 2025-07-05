import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, NumberInput } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { classSchema, type ClassSchema } from "@/schemas/class.schema";
import type { Class } from "@/types/class.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFetchTeachers } from "../../hooks/useFetchTeachers";

interface ClassFormProps {
  data?: Class;
  onSubmit: (values: ClassSchema) => void;
  isLoading?: boolean;
}

const ClassForm = ({ data, onSubmit, isLoading }: ClassFormProps) => {
  const form = useForm<ClassSchema>({
    resolver: zodResolver(classSchema),
  });

  useEffect(() => {
    if (data) {
      form.reset({
        grade: data.grade,
        code: data.code,
        year: data.year,
        class_teacher: data.home_teacher?.id,
      });
    }
  }, [data]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="grade"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Grade</FormLabel>
                <FormControl>
                  <NumberInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Code</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <FormControl>
                <NumberInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="class_teacher"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class Teacher</FormLabel>
              <FormControl>
                <UserSelect
                  onValueChange={field.onChange}
                  value={field.value?.toString()}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="bg-accent hover:bg-accent/80 mt-2 w-full border-2"
          type="submit"
          isLoading={isLoading}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

const UserSelect = (props: React.ComponentProps<typeof Select>) => {
  const { data } = useFetchTeachers();

  return (
    <Select {...props}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a teacher" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Teachers</SelectLabel>
          {data?.map((item) => (
            <SelectItem key={item.id} value={item.id.toString()}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ClassForm;
