import React from 'react'


export default function ProjectRow(props) {
    return (
        <div>
        <table className="tableProjects">
                <tr>
                    <td placeholder="Project Name"> {props.project.projectName} </td>
                    <td placeholder="Client">{props.project.projectClient}</td>
                    <td placeholder="Status">{props.project.projectStatus}</td>
                </tr> 
            </table>
        </div>
    )
}
