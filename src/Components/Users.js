import React from 'react'
import Table from 'react-bootstrap/Table'
import {useSelector} from 'react-redux'
import UsersRow from './UsersRaw'

export default function Users() {

    const usersData = useSelector(state => state.Users);

    return (
        <div>
            <div className="tableConatainer tableProjects">
            <Table className="tableProjectsHeading">
                <thead className="trHeading">
                    <tr>
                        <th> name </th>
                        <th> email  </th>
                        <th> projects  </th>
                    </tr>
                </thead> 
            </Table>
            </div>
            {usersData.map((value,index)=>{return <UsersRow key={"user"+index} user={value}/>})}
        </div>
    )
}