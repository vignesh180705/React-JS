import React from "react";
export default function Q2(){
    return(
        <form align="left">
            <h1 align="center">Novell Services Login</h1>
            <table align="center" border={0} cellPadding={5} cellSpacing={4}>
                <tr>
                    <td>Username:</td>
                    <td><input type="text" id="uname"></input></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="text" id="passwd"></input></td>
                </tr>
                <tr>
                    <td>City of <br/>Employment:</td>
                    <td><input type="text" id="coe"></input></td>
                </tr>
                <tr>
                    <td>Web Server:</td>
                    <td>
                        <select id="webserver">
                            <option value="">--Choose a server--</option>
                            <option value="http">HTTP</option>
                            <option value="https">HTTPS</option>
                            <option value="ftp">FTP</option>
                            <option value="sftp">SFTP</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Please specify<br/> your role:</td>
                    <td>
                        <input type="radio" value="admin" name="role"/>Admin<br/>
                        <input type="radio" value="engineer" name="role"/>Engineer<br/>
                        <input type="radio" value="manager" name="role"/>Manager<br/>
                        <input type="radio" value="guest" name="role"/>Guest<br/>
                    </td>
                </tr>
                <tr>
                    <td>Single Sign-on<br/> to the following:</td>
                    <td>
                    <input type="checkbox" name="" id=""/>Mail<br/>
                    <input type="checkbox" name="" id=""/>Payroll<br/>
                    <input type="checkbox" name="" id=""/>Self-Service<br/>
                    </td>
                </tr>
            </table>
            <br/>
            <div align="center">
                <button type="submit">Login</button>
                &nbsp;
                <button type="reset">Reset</button>
            </div>
        </form>
    )
}