import React from 'react'

export default function SummaryRow(props) {
    return (
        <div>
            <table className="tableProjects">
                <td> {props.report.reportProjectName} </td>
                <td>{props.report.reportFrom}</td>
                <td>{props.report.reportTo}</td>
                <td>{props.report.reportDate}</td>
        </table>
    </div>
    )
}
