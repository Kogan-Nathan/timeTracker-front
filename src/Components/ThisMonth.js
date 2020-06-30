import React, {useState} from 'react'
import Table from 'react-bootstrap/Table'
import moment from 'moment'
import {useSelector} from 'react-redux'
import SummaryRow from './SummaryRow'


export default function ThisMonth() {

    const reportData = useSelector(state => state.reportData);
    const users = useSelector(state=>state.Users)
    const UserIndex = useSelector(state=>state.isLogged.userIndex)
    const [reportForMonth, setReportForMonth] = useState([])
    const [total, setTotal] = useState()
    const [show, setShow] = useState(true)
    //----------------------------------------------------------
    const onlyThisWeek = () =>{
        if(show){
            let startOfMonth = moment().startOf('month')
            let endOfMonth   = moment().endOf('month')
    
            // filter by user id --- >
            let tempReports = reportData.filter(value => value.reportUserName===users[UserIndex].name)
            // the reports for the current month --- >
            let tempfilter = tempReports.filter(report => moment(report.reportDate).isBetween(startOfMonth, endOfMonth))
            setReportForMonth(tempfilter)  
                                     
            totalCalc()
            setShow(false) 
          
        }
    }
    //----------------------------------------------------------
    const totalCalc=()=>{
        let totalHours = reportForMonth.filter(report => report.reportStatus)
        totalHours = reportForMonth.slice(1).reduce((prev, cur)=> moment.duration(cur).add(prev), moment.duration(reportForMonth[0]))
        
        
        // setTotal(totalHours)
    }

    //----------------------------------------------------------
    return (
        <div>
            <h5 style={{paddingBottom:"30px"}}> This Month </h5>
            <div className="tableConatainer">
            <Table className="tableProjectsHeading">
                <thead>
                    <tr className="trHeading">
                        <th> Project Name </th>
                        <th> Client  </th>
                        <th> Status  </th>
                        <th> Date  </th>
                    </tr> 
                </thead>
            </Table>
            </div>
            {onlyThisWeek()}
            {reportForMonth.map((value,index)=>{return <SummaryRow key={"report"+index} report={value}/>})}
            <div>
            <div> <button className="login-butt"> Total: {total} </button> </div>
            </div>
        </div>
    )
}
