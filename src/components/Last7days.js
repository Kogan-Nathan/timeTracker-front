import React, {useState} from 'react'
import Nav from './Nav'
import moment from 'moment'
import {useSelector} from 'react-redux'
import SummaryRow from './SummaryRow'

export default function Last7days() {

    const reportData = useSelector(state => state.reportData);
    const [reportForWeek, setReportForWeek] = useState()
    const [show, setShow] = useState(false)

    const onlyThisWeek = () =>{
        let startDate = moment().subtract(8, 'days').calendar() // gives you the start date 
        let endDateTemp = moment() // todays date as object
        let endDate = endDateTemp.format('MM/DD/YYYY') // todays day as string

        let tempReports = reportData.filter(value => value.reportUserName==='abi')
        let tempfilter = tempReports.filter(report => moment(report.reportDate).isBetween(startDate, endDate))
        setReportForWeek(tempfilter)    

        setShow(true)   
    }





    return (
        <div className="main">
            <Nav/>
                <h5 style={{paddingBottom:"30px"}}> Last 7 days </h5>
                <div className="tableConatainer">
                <table className="tableProjectsHeading">
                    <tr className="trHeading">
                        <th> Project Name </th>
                        <th> Client  </th>
                        <th> Status  </th>
                        <th> Date  </th>
                        {/* {JSON.stringify(reportForWeek)} */}
                    </tr> 
                </table>
                </div>
            {show &&
            reportForWeek.map((value,index)=>{return <SummaryRow key={"report"+index} report={value}/>})
            }
            <div> <button className="login-butt" onClick={()=>onlyThisWeek()} > Total: {} </button> </div>
        </div>
    )
}
