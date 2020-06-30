import React from 'react'
import Table from 'react-bootstrap/Table'

export default function ReportRaw(props) {
    return (
        <div>
            <Table className="tableProjects">
                <thead>
                    <tr>
                        <td placeholder="Project Name"> {props.report.reportProjectName} </td>
                        <td placeholder="From">{props.report.reportFrom}</td>
                        <td placeholder="To">{props.report.reportTo}</td>
                        <td placeholder="report date"> {props.report.reportDate} </td>
                        <td placeholder="report status"> {props.report.reportStatus}</td>
                    </tr>
                </thead>    
            </Table>
        </div>
    )
}
