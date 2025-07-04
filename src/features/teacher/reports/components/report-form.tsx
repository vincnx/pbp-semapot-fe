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
import { useFetchCourses } from "../../hooks/useFetchCourses";

interface ReportFormProps {
  data: Report;
  onSubmit: (values: ReportSchema) => void;
  isLoading?: boolean;
}

const ReportForm = ({ data, onSubmit, isLoading }: ReportFormProps) => {
  const { data: courses } = useFetchCourses();

  const form = useForm<ReportSchema>({
    resolver: zodResolver(reportSchema),
  });

  // initialize form with courses
  useEffect(() => {
    if (!courses) return;

    const initialReportItems = courses.map((course) => ({
      course_id: course.id,
      course_name: course.name,
      grade: 0,
    }));

    form.reset({
      report_items: initialReportItems,
    });
  }, [courses]);

  // update form with existing report data
  useEffect(() => {
    if (!data?.report_items || !courses) return;

    const updatedReportItems = courses.map((course) => {
      const existingReport = data.report_items?.find(
        (item) => item.course_id === course.id,
      );

      return {
        course_id: course.id,
        course_name: course.name,
        grade: existingReport?.grade ?? 0,
      };
    });

    form.reset({
      report_items: updatedReportItems,
    });
  }, [data, courses]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {courses?.map((course, index) => (
          <div className="flex items-start gap-2" key={course.id}>
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

export default ReportForm;
