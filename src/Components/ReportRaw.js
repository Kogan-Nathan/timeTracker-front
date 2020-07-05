import React from 'react'
import Table from 'react-bootstrap/Table'
import {useState} from 'react'
import moment from 'moment' 

export default function ReportRaw(props) {

    const [date,setDate] = useState()
    const [show, setShow] = useState(true)

    const convertDate=()=>{
        if(show){
        let tempDate = moment(props.report.reportDate).format("MM-DD-YYYY")
        setDate(tempDate)
        setShow(false)
    }
}

    return (
        <div>
            {convertDate()}
            <Table className="tableProjects">
                <thead>
                    <tr>
                        <td placeholder="Project Name"> {props.report.reportProjectName} </td>
                        <td placeholder="From">{props.report.reportFrom}</td>
                        <td placeholder="To">{props.report.reportTo}</td>
                        <td placeholder="report date"> {date}</td>
                        <td placeholder="report status"> {props.report.reportStatus}</td>
                    </tr>
                </thead>    
            </Table>
        </div>
    )
}
