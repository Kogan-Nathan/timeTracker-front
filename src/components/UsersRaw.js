import React from 'react'


export default function UsersRaw (props) {
    return (
        <div>
        <table className="tableProjects">
                <tr>
                    <td> {props.user.name} </td>
                    <td>{props.user.email}</td>
                    <td>{/*props.user.userProjects*/} projects </td>
                </tr> 
            </table>
        </div>
    )
}
