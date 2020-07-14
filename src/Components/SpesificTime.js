import React, {useState} from 'react'
import Table from 'react-bootstrap/Table'
import moment from 'moment'
import {useSelector} from 'react-redux'
import SummaryRow from './SummaryRow'

export default function SpesificTime() {
    const reportData = useSelector(state => state.reportData);
    const users = useSelector(state=>state.Users)
    const UserIndex = useSelector(state=>state.isLogged.userIndex)

    const [reportForSpesific, setReportForSpesific] = useState()
    const [show, setShow] = useState(false)
    const [toDate, setToDate] = useState()
    const [fromDate, setFromDate] = useState()
    const [total, setTotal] = useState()


    const handleToDate=(e)=>{
        setToDate(e.target.value) 
    }

    const handleFromDate=(e)=>{
        setFromDate(e.target.value)
    }

    const onlySpesificTime = () =>{ 
        if(toDate&&fromDate){
            // filter by user id --- >
            let tempReports = reportData.filter(value => value.reportUserId===users[UserIndex].id)
            // the reports for the spesific time choosen --- >
            let tempfilter = tempReports.filter(report => moment(report.reportDate).isBetween(fromDate, toDate))
            setReportForSpesific(tempfilter)    
            totalCalc(tempfilter)
            setShow(true)
        }   
    }

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

    return (
        <div>
            <h3 className="h-spesific"> Choose a Spesific Time </h3>
            <Table className="tableProjects">
                <thead>
                    <tr>
                        <td style={{border:"2px #fff solid"}} colSpan="2" className="td-spesific"> From 
                        <input className="td-spesific cursor" type="date" placeholder="dd/mm/yyyy" max={new Date().toISOString().split("T")[0]} onChange={handleFromDate}></input></td>
                        <td style={{border:"2px #fff solid"}} colSpan="2" className="td-spesific"> To 
                        <input className="td-spesific cursor" type="date" placeholder="dd/mm/yyyy" max={new Date().toISOString().split("T")[0]} onChange={handleToDate} ></input></td>
                    </tr> 
                </thead>
            </Table>
            <div className="tableConatainer tableProjects" style={{marginTop:"10px"}}>
                <Table className="tableProjectsHeading">
                    <thead >
                        <tr className="trHeading">
                            <th> Project Name </th>
                            <th> Client  </th>
                            <th> Status  </th>
                            <th> Date  </th>
                        </tr>
                    </thead> 
                </Table>
            </div>
            {show &&
            reportForSpesific.map((value,index)=>{return <SummaryRow key={"report"+index} report={value}/>})
            }
            <div>
                <button className="login-butt" style={{marginTop:"20px"}} onClick={()=> onlySpesificTime()}> Total: {total} </button>
            </div>
        </div>
    )
}