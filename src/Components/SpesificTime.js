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

            setShow(true)
        }   
    }


    return (
        <div className="main">
            <h3 className="h-spesific"> Choose a Spesific Time </h3>
            <Table className="tableProjects">
                <thead>
                    <tr>
                        <td style={{border:"2px #fff solid"}} colSpan="2" className="td-spesific"> From 
                        <input className="td-spesific cursor" type="date" placeholder="dd/mm/yyyy" max={new Date().toISOString().split("T")[0]} onChange={handleFromDate}></input></td>
                        <td style={{border:"2px #fff solid",marginLeft:"20px"}} colSpan="2" className="td-spesific"> To 
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
            <div> <button className="login-butt" onClick={()=> onlySpesificTime()} > Total: {} </button> </div>
            </div>

        </div>
    )
}
