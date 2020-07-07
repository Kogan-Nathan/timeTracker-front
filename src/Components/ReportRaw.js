import React from 'react'
import Table from 'react-bootstrap/Table'
import moment from 'moment'

export default function ReportRaw(props) {
    return (
        <div>
            <Table className="tableProjects">
                <thead>
                    <tr>
                        <td className="reportTd" placeholder="Project Name"> {props.report.reportProjectName} </td>
                        <td className="reportTd" placeholder="From">{props.report.reportFrom}</td>
                        <td className="reportTd" placeholder="To">{props.report.reportTo}</td>
                        <td className="reportTd" placeholder="report date"> {moment(props.report.reportDate).format("YYYY-MM-DD")} </td>
                        <td className="reportTd" placeholder="report status">Total: {props.report.reportStatus}</td>
                    </tr>
                </thead>    
            </Table>
        </div>
    )
}