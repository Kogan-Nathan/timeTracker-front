import React, {useState} from 'react'
import Nav from './Nav'
import moment from 'moment'
import {useSelector} from 'react-redux'
import SummaryRow from './SummaryRow'


export default function ThisMonth() {

    const reportData = useSelector(state => state.reportData);
    const users = useSelector(state=>state.Users)
    const UserIndex = useSelector(state=>state.isLogged.userIndex)
    const [reportForMonth, setReportForMonth] = useState()
    const [show, setShow] = useState(false)

    const onlyThisWeek = () =>{
        
        let startOfMonth = moment().startOf('month')
        let endOfMonth   = moment().endOf('month')

        // filter by user id --- >
        let tempReports = reportData.filter(value => value.reportUserName===users[UserIndex].name)
        // the reports for the current month --- >
        let tempfilter = tempReports.filter(report => moment(report.reportDate).isBetween(startOfMonth, endOfMonth))
        setReportForMonth(tempfilter)    

        setShow(true)   
    }

    return (
        <div>
            <Nav/>
            <h5 style={{paddingBottom:"30px"}}> This Month </h5>
            <div className="tableConatainer">
                <table className="tableProjectsHeading">
                    <tr className="trHeading">
                        <th> Project Name </th>
                        <th> Client  </th>
                        <th> Status  </th>
                        <th> Date  </th>
                    </tr> 
                </table>
                </div>
            {show &&
            reportForMonth.map((value,index)=>{return <SummaryRow key={"report"+index} report={value}/>})
            }
            <div>
            <div> <button className="login-butt" onClick={()=>onlyThisWeek()} > Total: {} </button> </div>
            </div>
        </div>
    )
}
