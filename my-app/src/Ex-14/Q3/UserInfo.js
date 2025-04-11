import React from "react";
export default function UserInfo(){
    return(
        <div style={{textAlign: 'left'}}>
            <br/>
            <table border={0} cellSpacing={0} cellPadding={5} align='center'>
                <tr>
                    <th>Name: </th>
                    <td>Vignesh N</td>
                </tr>
                <tr>
                    <th>Age: </th>
                    <td>19</td>
                </tr>
                <tr>
                    <th>DOB: </th>
                    <td>18/07/2005</td>
                </tr>
                <tr>
                    <th>Email ID: </th>
                    <td>vignesh.n2023@vitstudent.ac.in</td>
                </tr>
            </table>
            <br/>
        </div>
    );
}