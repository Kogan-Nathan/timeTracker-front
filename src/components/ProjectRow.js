import React from 'react'


export default function ProjectRow(props) {
    return (
        <div>
        <table className="tableProjects">

                    <td> {props.project.projectName} </td>
                    <td>{props.project.projectClient}</td>
                    <td>{props.project.projectStatus}</td>

            </table>
        </div>
    )
}
