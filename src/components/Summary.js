import React from 'react'
import Nav from './Nav'

export default function Summary() {





    return (
        <div>
            <Nav/>
            {/* loop */}
            <table className="tableProjects">
                <tr>
                    <input type="text" placeholder="Project Name"></input>
                    <input type="text" placeholder="Client"></input>
                    <input type="number" placeholder="Status"></input>
                    <input type="date" placeholder="dd/mm/yyyy"></input>
                </tr> 
            </table>
            <div>
                <button className="signup-butt"> Total: {} </button>
            </div>
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
