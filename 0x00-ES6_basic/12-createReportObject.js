export default function createReportObject(employeesList) {
  return {
    employees: employeesList,
    generateReport() {
      console.log("Generating report...");
      
    },
  };
}
