import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { NumberInput } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { periodSchema, type PeriodSchema } from "@/schemas/period.schema";
import type { Period } from "@/types/period.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface PeriodFormProps {
  data?: Period;
  onSubmit: (values: PeriodSchema) => void;
}

const PeriodForm = ({ data, onSubmit }: PeriodFormProps) => {
  const form = useForm<PeriodSchema>({
    resolver: zodResolver(periodSchema),
    defaultValues: {
      year: data?.year ? +data.year : undefined,
      semester: data?.semester as "1" | "2" | undefined,
      is_active: data?.is_active ? true : undefined,
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
          name="semester"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Semester</FormLabel>
              <Select
                name="semester"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a semester" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Odd</SelectItem>
                  <SelectItem value="2">Even</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="is_active"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select
                name="is_active"
                onValueChange={field.onChange}
                defaultValue={
                  field.value ? Number(field.value).toString() : "0"
                }
                disabled={!data}
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="0">Inactive</SelectItem>
                  <SelectItem value="1">Active</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                By default, the period is inactive, you can change it later.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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

export default PeriodForm;
