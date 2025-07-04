import Loader from "@/components/loader";
import { toast } from "@/components/ui/sonner";
import { useCreateReportItems } from "@/features/teacher/hooks/useCreateReportItems";
import { useFetchReport } from "@/features/teacher/hooks/useFetchReport";
import ReportForm from "@/features/teacher/reports/components/report-form";
import type { ReportSchema } from "@/schemas/report.schema";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/teacher/reports/$reportId/edit",
)({
  component: RouteComponent,
  loader: async () => {
    return {
      crumb: "Edit",
    };
  },
});

const dataPairContainer = "flex gap-2";
const labelStyle = "w-16";

function RouteComponent() {
  const { reportId } = Route.useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useFetchReport(reportId);
  const { mutate, isPending } = useCreateReportItems();

  function onSubmit(values: ReportSchema) {
    mutate(
      {
        schema: values,
        reportId: Number(reportId),
      },
      {
        onSuccess: () => {
          toast({
            title: "Report successfully updated",
            description: "Report has been successfully updated",
          });
          navigate({
            to: "/teacher/reports",
          });
        },
      },
    );
  }

  if (!data) return <Loader isLoading={isLoading} />;

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Edit report</h1>
        <div className="flex flex-col gap-2">
          <div className={dataPairContainer}>
            <p className={labelStyle}>Student</p>
            <p>: {data.student.name}</p>
          </div>
          <div className={dataPairContainer}>
            <p className={labelStyle}>Class</p>
            <p>
              : {data.classroom.grade} {data.classroom.code.toUpperCase()}
            </p>
          </div>
          <div className={dataPairContainer}>
            <p className={labelStyle}>Period</p>
            <p>
              : {data.period.year} sem {data.period.semester}
            </p>
          </div>
        </div>
        <ReportForm data={data} onSubmit={onSubmit} isLoading={isPending} />
      </div>
    </>
  );
}
