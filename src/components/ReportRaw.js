import React from 'react'


export default function ReportRaw(props) {
    return (
        <div>
        <table className="tableProjects">
                <tr>
                    <td placeholder="Project Name"> {props.report.projectName} </td>
                    <td placeholder="From">{props.report.reportFrom}</td>
                    <td placeholder="To">{props.report.reportTo}</td>
                </tr> 
            </table>
        </div>
    )
}
