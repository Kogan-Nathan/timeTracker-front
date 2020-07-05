import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'

export default function SummaryRow(props) {
    
    const Projects = useSelector(state => state.Projects);

    const totaltimeCalc=()=>{
        let fromTime = props.report.reportFrom;
        let toTime = props.report.reportTo;
        let hours = moment.utc(moment(toTime,"HH:mm").diff(moment(fromTime,"HH:mm"))).format("HH:mm")
        return hours
    }

    const getClient=()=>{
        let thisProject
        for( let i in Projects){
            if(Projects[i]['projectName']===props.report.reportProjectName){
                thisProject=Projects[i]['projectClient']
            }
        }
        return thisProject
    }
    
    return (
        <div>
            <Table className="tableProjects">
                <thead>
                    <tr>
                        <td> {props.report.reportProjectName} </td>
                        <td>{getClient()}</td>
                        <td>{totaltimeCalc()} hrs</td>
                        <td>{props.report.reportDate}</td>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}
