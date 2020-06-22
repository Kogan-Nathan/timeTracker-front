import React from 'react'
import Nav from './Nav'
import ReportRaw from './ReportRaw'

export default function Timetracker() {





    return (

        <div>
        <Nav/>
        <table className="tableProjects">
            <tr style={{display: "inline"}}>
                <th> Project name </th>
                <th> From  </th>
                <th> To  </th>
                <th> Date  </th>
                <th> Total hours  </th>
            </tr> 
        </table>

        {reportsData.map((value,index)=>{return <ReportRaw key={"report"+index} report={value}/>})}


        <div class="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a class="active" href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
        </div>
    </div>
    )
}
