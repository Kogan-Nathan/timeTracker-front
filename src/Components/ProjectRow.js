import React from 'react'
import Table from 'react-bootstrap/Table'
import moment from 'moment'

export default function ProjectRow(props) {
    
    const convertStatusTime=()=>{
        let projectStatus = props.project.projectStatus
        
        let totalTime = moment.duration(projectStatus, 'hours');
        let hours = Math.floor(totalTime.asHours());
        let mins  = Math.floor(totalTime.asMinutes()) - hours * 60;
        hours = ((hours > 9) ? hours : ("0"+hours))
        mins = ((mins > 9) ? mins : ("0"+mins))
        let result = hours + ":" + mins;
        return result
    }
    
    return (
        <div>
            <Table className="tableProjects">
                <thead>
                    <tr>
                        <td> {props.project.projectName} </td>
                        <td>{props.project.projectClient}</td>
                        <td>{convertStatusTime()} hrs</td>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}
