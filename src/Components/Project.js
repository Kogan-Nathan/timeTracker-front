import React from 'react'
import Table from 'react-bootstrap/Table'
import { useSelector} from 'react-redux';
import ProjectRow from './ProjectRow'

export default function Project() {
    const projectData = useSelector(state => state.Projects);


    return (
        <div>
            <div className="tableConatainer">
                <Table className="tableProjectsHeading">
                    <thead className="trHeading">
                        <tr>
                            <th> project name </th>
                            <th> client  </th>
                            <th> status  </th>
                        </tr> 
                    </thead>
                </Table>
            </div>
            {projectData.map((value,index)=>{return <ProjectRow key={"project"+index} project={value}/>})}
        </div>
    )
}
