import React from 'react'
import Nav from './Nav'
import {useSelector} from 'react-redux'
import UsersRow from './UsersRaw'

export default function Users() {

    const usersData = useSelector(state => state.usersData);

    return (
        <div className="main">
            <Nav/>
            <div className="tableConatainer">
            <table className="tableProjectsHeading">
                <tr className="trHeading">
                    <th> name </th>
                    <th> email  </th>
                    <th> projects  </th>
                </tr> 
            </table>
            </div>

            {usersData.map((value,index)=>{return <UsersRow key={"user"+index} user={value}/>})}

        </div>
    )
}
