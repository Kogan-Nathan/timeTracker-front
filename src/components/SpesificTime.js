import React, {useState} from 'react'
import Nav from './Nav'
import moment from 'moment'
import {useSelector} from 'react-redux'
import SummaryRow from './SummaryRow'

export default function SpesificTime() {


    const reportData = useSelector(state => state.reportData);
    const [reportForSpesific, setReportForSpesific] = useState()
    const [show, setShow] = useState(false)
    const [toDate, setToDate] = useState()
    const [fromDate, setFromDate] = useState()


    const handleToDate=(e)=>{
        setToDate(e.target.value) 
        // onlySpesificTime()
    }

    const handleFromDate=(e)=>{
        setFromDate(e.target.value)
    }

    const onlySpesificTime = () =>{       
        // filter by user id --- >
        let tempReports = reportData.filter(value => value.reportUserName==='abi')
        // the reports for the spesific time choosen --- >
        let tempfilter = tempReports.filter(report => moment(report.reportDate).isBetween(fromDate, toDate))
        setReportForSpesific(tempfilter)    

        setShow(true)   
    }


    return (
        <div>
            <Nav/>
            <h5 style={{paddingBottom:"30px"}}> Choose a Spesific Time </h5>
            <table className="tableProjects">
                <tr>
                    <lable className="lable"> From </lable>
                    <input type="date" placeholder="dd/mm/yyyy" onChange={handleFromDate}></input>
                    <lable className="lable" style={{marginLeft:"20px"}} > To </lable>
                    <input type="date" placeholder="dd/mm/yyyy" onChange={handleToDate} ></input>
                </tr> 
            </table>
            {show &&
            reportForSpesific.map((value,index)=>{return <SummaryRow key={"report"+index} report={value}/>})
            }
            <div>
            <div> <button className="login-butt" onClick={()=> onlySpesificTime()} > Total: {} </button> </div>
            </div>

        </div>
    )
}
