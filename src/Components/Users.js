import React from 'react'
import Table from 'react-bootstrap/Table'
import {useSelector} from 'react-redux'
import UsersRow from './UsersRaw'

export default function Users() {

    const usersData = useSelector(state => state.Users);

    return (
        <div className="container">
            <div className="tableConatainer">
            <Table className="tableProjectsHeading">
                <thead>
                    <tr className="trHeading">
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
