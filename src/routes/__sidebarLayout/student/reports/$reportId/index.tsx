import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReportPdf } from "@/features/student/reports/components/report-pdf";
import type { Report } from "@/types/report.type";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__sidebarLayout/student/reports/$reportId/",
)({
  component: RouteComponent,
  loader: async () => {
    const data = await getData();
    return {
      crumb: "Detail",
      data,
    };
  },
});

async function getData(): Promise<Report> {
  return {
    id: "1",
    student: {
      id: "1",
      name: "John Doe",
    },
    class: {
      grade: "1",
      code: "A",
      year: "2024",
    },
    period: {
      year: "2024",
      semester: "1",
    },
    report_items: [
      {
        course_id: "1",
        course_name: "Math",
        grade: 85,
      },
      {
        course_id: "2",
        course_name: "Science",
        grade: 90,
      },
    ],
  };
}

function RouteComponent() {
  const { data } = Route.useLoaderData();

  const dataPairContainer = "flex gap-2";
  const labelStyle = "w-16";

  const totalGrade = data.report_items?.reduce(
    (total, item) => total + (item.grade ?? 0),
    0,
  );
  const averageGrade = totalGrade
    ? totalGrade / (data.report_items?.length ?? 1)
    : "-";

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1>Report detail</h1>
        <div className="flex flex-col gap-2">
          <div className={dataPairContainer}>
            <p className={labelStyle}>Student</p>
            <p>: {data.student.name}</p>
          </div>
          <div className={dataPairContainer}>
            <p className={labelStyle}>Class</p>
            <p>
              : {data.class.grade} {data.class.code.toUpperCase()}
            </p>
          </div>
          <div className={dataPairContainer}>
            <p className={labelStyle}>Period</p>
            <p>
              : {data.period.year} sem {data.period.semester}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <PDFDownloadLink
            document={<ReportPdf data={data} />}
            fileName={`${data.student.name}-${data.class.code}-${data.period.year}-${data.period.semester}.pdf`}
          >
            <Button className="bg-accent hover:bg-accent/80 w-fit border-2">
              Download
            </Button>
          </PDFDownloadLink>
          <div className="overflow-hidden rounded-lg border-2">
            <Table>
              <TableHeader>
                <TableRow className="text-base">
                  <TableHead className="font-semibold">Course Name</TableHead>
                  <TableHead className="font-semibold">Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-base">
                {data.report_items?.map((item) => (
                  <TableRow key={item.course_id}>
                    <TableCell>{item.course_name}</TableCell>
                    <TableCell>{item.grade}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-accent hover:bg-accent/80">
                  <TableCell className="font-semibold">Average</TableCell>
                  <TableCell className="font-semibold">
                    {averageGrade}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
