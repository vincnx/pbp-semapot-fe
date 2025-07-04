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
import { courseSchema, type CourseSchema } from "@/schemas/course.schema";
import type { Course } from "@/types/course.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface CourseFormProps {
  data?: Course;
  onSubmit: (values: CourseSchema) => void;
  isLoading?: boolean;
}

const CourseForm = ({ data, onSubmit, isLoading }: CourseFormProps) => {
  const form = useForm<CourseSchema>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      name: data?.name,
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
              <FormLabel>Course name</FormLabel>
              <FormControl>
                <Input {...field} />
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

export default CourseForm;
