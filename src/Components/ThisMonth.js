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
            // debugger
            let startOfMonth = moment().startOf('month')
            let endOfMonth   = moment().endOf('month')
            // filter by user id --- >
            let tempReports = reportData.filter(value => value.reportUserId===users[UserIndex].id)
            // the reports for the current month --- >
            let tempfilter = tempReports.filter(report => moment(report.reportDate).isBetween(startOfMonth, endOfMonth))
            setReportForMonth(tempfilter)                          
            totalCalc(tempfilter)
            setShow(false)
        }
    }
    //----------------------------------------------------------
    const totalCalc=(tempfilter)=>{
        let totalHoursArray = tempfilter.map(report => report.reportStatus)
        console.log(totalHoursArray);
        
        totalHoursArray = totalHoursArray.slice(1).reduce((prev, cur)=> moment.duration(cur).add(prev), moment.duration(totalHoursArray[0]))

        let convertHours = moment.duration(totalHoursArray).asHours() 

        let totalTime = moment.duration(convertHours, 'hours');
        let hours = Math.floor(totalTime.asHours());
        let mins  = Math.floor(totalTime.asMinutes()) - hours * 60;

        let result = hours + ":" + mins;
        setTotal(result)
        
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
            
            <div> <button className="login-butt"> Total: {total} </button> </div>
           
        </div>
    )
}
