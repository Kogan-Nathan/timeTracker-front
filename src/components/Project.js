import React from 'react'
import Nav from './Nav'
import { useSelector,useDispatch} from 'react-redux';
import { useState, useEffect } from 'react'
import { Provider } from 'react-redux';
import ProjectRow from './ProjectRow'

export default function Project() {


    const projectData = useSelector(state => state.projectData);
   // const dispatch = useDispatch();



    return (
        <div>
            <Nav/>
            <table className="tableProjects">
                <tr style={{display: "inline"}}>
                    <th> project name </th>
                    <th> client  </th>
                    <th> status  </th>
                </tr> 
            </table>

            {projectData.map((value,index)=>{return <ProjectRow key={"project"+index} project={value}/>})}



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
