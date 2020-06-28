import React from 'react'


export default function ReportRaw(props) {
    return (
        <div>
        <table className="tableProjects">
                
                    <td placeholder="Project Name"> {props.report.reportProjectName} </td>
                    <td placeholder="From">{props.report.reportFrom}</td>
                    <td placeholder="To">{props.report.reportTo}</td>
                    <td placeholder="report date"> {props.report.reportDate} </td>
                    <td placeholder="report status"> {props.report.reportStatus}</td>

            </table>
        </div>
    )
}
