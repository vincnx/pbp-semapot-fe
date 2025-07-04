import type { Report } from "@/types/report.type";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontSize: 12,
    justifyContent: "flex-start",
    flexDirection: "column",
    fontFamily: "Times-Roman",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  courseDetailContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  tableCell: {
    border: "1px solid black",
    padding: 4,
  },
  fontSemiBold: {
    fontWeight: "semibold",
  },
});

interface ReportPdfProps {
  data: Report;
}

export const ReportPdf = ({ data }: ReportPdfProps) => {
  const totalGrade = data.report_items?.reduce(
    (total, item) => total + (item.grade ?? 0),
    0,
  );
  const averageGrade = totalGrade
    ? totalGrade / (data.report_items?.length ?? 1)
    : "-";

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View>
            <Text style={styles.title}>SD abcdedf Report</Text>
          </View>
          <View style={styles.courseDetailContainer}>
            <Text>Student: {data.student.name}</Text>
            <Text>Class: {data.classroom.code}</Text>
            <Text>Period: {data.period.year}</Text>
          </View>
          <View>
            <View>
              <View style={styles.tableHeader}>
                <Text style={[styles.tableCell, { width: "10%" }]}>No.</Text>
                <Text style={[styles.tableCell, { width: "70%" }]}>
                  Course Name
                </Text>
                <Text style={[styles.tableCell, { width: "20%" }]}>Grade</Text>
              </View>
            </View>
            <View>
              {data.report_items?.map((item, index) => (
                <View style={styles.tableHeader}>
                  <Text style={[styles.tableCell, { width: "10%" }]}>
                    {index + 1}
                  </Text>
                  <Text style={[styles.tableCell, { width: "70%" }]}>
                    {item.course.name}
                  </Text>
                  <Text style={[styles.tableCell, { width: "20%" }]}>
                    {item.grade}
                  </Text>
                </View>
              ))}
              <View style={styles.tableHeader}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.fontSemiBold,
                    { width: "80%" },
                  ]}
                >
                  Average Grade
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    styles.fontSemiBold,
                    { width: "20%" },
                  ]}
                >
                  {averageGrade}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
