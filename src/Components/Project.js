import React from 'react'
import Nav from './Nav'
import { useSelector} from 'react-redux';
import ProjectRow from './ProjectRow'

export default function Project() {
    const projectData = useSelector(state => state.projectData);


    return (
        <div className="main">
            <Nav/>
            <div className="tableConatainer">
            <table className="tableProjectsHeading">
                <tr className="trHeading">
                    <th> project name </th>
                    <th> client  </th>
                    <th> status  </th>
                </tr> 
            </table>
            </div>

            {projectData.map((value,index)=>{return <ProjectRow key={"project"+index} project={value}/>})}

        </div>
    )
}
