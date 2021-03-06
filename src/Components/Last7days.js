import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import moment from "moment";
import { useSelector } from "react-redux";
import SummaryRow from "./SummaryRow";

export default function Last7days() {
  const reportData = useSelector(state => state.reportData);
  const users = useSelector(state => state.Users);
  const UserIndex = useSelector(state => state.isLogged.userIndex);
  const [reportForWeek, setReportForWeek] = useState([]);
  const [total, setTotal] = useState();
  const [show, setShow] = useState(true);

  const onlyThisWeek = () => {
    if (show) {
      let startDate = moment()
        .subtract(8, "days")
        .calendar(); // gives you the start date
      let endDateTemp = moment().add(1, 'days'); // todays date as object
      let endDate = endDateTemp.format("MM/DD/YYYY"); // todays day as string

      let tempReports = reportData.filter(
        value => value.reportUserId === users[UserIndex].id
      );
      let tempfilter = tempReports.filter(report =>
        moment(report.reportDate).isBetween(startDate, endDate)
      );
      setReportForWeek(tempfilter);
      totalCalc(tempfilter);
      setShow(false);
    }
  };

  const totalCalc = tempfilter => {
    let totalHoursArray = tempfilter.map(report => report.reportStatus);

    totalHoursArray = totalHoursArray
      .slice(1)
      .reduce(
        (prev, cur) => moment.duration(cur).add(prev),
        moment.duration(totalHoursArray[0])
      );

    let convertHours = moment.duration(totalHoursArray).asHours();
    let totalTime = moment.duration(convertHours, "hours");
    let hours = Math.floor(totalTime.asHours());
    let mins = Math.floor(totalTime.asMinutes()) - hours * 60;

    let result = hours + ":" + mins;
    setTotal(result);
  };

  return (
    <div className="main">
      <h3 className="h-spesific"> Last 7 days </h3>
      <div className="tableConatainer tableProjects">
        <Table className="tableProjectsHeading">
          <thead>
            <tr className="trHeading">
              <th> Project Name </th>
              <th> Client </th>
              <th> Status </th>
              <th> Date </th>
            </tr>
          </thead>
        </Table>
      </div>
      {onlyThisWeek()}
      {reportForWeek.map((value, index) => {
        return <SummaryRow key={"report" + index} report={value} />;
      })}

      <div>
        <button className="total-butt" style={{ marginTop: "20px" }}>
          Total: {total}
        </button>
      </div>
    </div>
  );
}
