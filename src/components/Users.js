import React from 'react'
import Nav from './Nav'

export default function Users() {
    return (
        <div>
            <Nav/>
            <table className="tableProjects">
                <tr style={{display: "inline"}}>
                    <th> name </th>
                    <th> email  </th>
                    <th> projects  </th>
                    {/* <th> {name} </th>
                    <th> {email} </th>
                    <th> {projects} </th> */}
                </tr> 
            </table>

            {/*  loop  */}
            <table className="tableProjects">
                <tr>
                    <input type="text" placeholder="name"></input>
                    <input type="email" placeholder="email"></input>
                    <input type="text" placeholder="projects"></input>
                </tr> 
            </table>

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
