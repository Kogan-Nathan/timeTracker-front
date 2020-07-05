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
        <div>
            <h5 style={{paddingBottom:"30px"}}> Choose a Spesific Time </h5>
            <Table className="tableProjects">
                <thead>
                    <tr>
                        <td style={{border:"2px #fff solid"}} colspan="2" className="inputTime"> From 
                        <input className="input inputTime" type="date" placeholder="dd/mm/yyyy" onChange={handleFromDate}></input></td>
                        <td style={{border:"2px #fff solid",marginLeft:"20px"}} colspan="2" className="inputTime"> To 
                        <input className="input inputTime" type="date" placeholder="dd/mm/yyyy" onChange={handleToDate} ></input></td>
                    </tr> 
                </thead>
            </Table>
            <div className="tableConatainer" style={{marginTop:"10px"}}>
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
