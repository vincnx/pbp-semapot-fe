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
import { reportSchema, type ReportSchema } from "@/schemas/report.schema";
import type { Report } from "@/types/report.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface ReportFormProps {
  data: Report;
  onSubmit: (values: ReportSchema) => void;
}

const ReportForm = ({ data, onSubmit }: ReportFormProps) => {
  const form = useForm<ReportSchema>({
    resolver: zodResolver(reportSchema),
  });

  useEffect(() => {
    if (data) {
      form.reset({
        report_items: data.report_items?.map((item) => ({
          course_id: item.course_id,
          course_name: item.course_name,
          grade: item.grade,
        })),
      });
    }
  }, [data, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {data.report_items?.map((_, index) => (
          <div className="flex items-start gap-2" key={index}>
            <FormField
              control={form.control}
              name={`report_items.${index}.course_name`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Course Name</FormLabel>
                  <FormControl>
                    <Input disabled {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`report_items.${index}.grade`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade</FormLabel>
                  <FormControl>
                    <NumberInput
                      className="w-16"
                      {...field}
                      max={100}
                      min={0}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
        <Button
          className="bg-accent hover:bg-accent/80 mt-2 w-full border-2"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ReportForm;
