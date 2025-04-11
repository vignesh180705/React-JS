import React from "react";

function UserPosts(){
    return(
        <div style={{textAlign: 'left'}}>
            <h1 align="center">User Posts</h1>
            <table border={0} cellSpacing={2} cellPadding={5} align="center">
                <tr>
                    <td>Web Programming:</td>
                    <td><a href="https://github.com/vignesh180705/Web-Programming">Click Here!</a></td>
                </tr>
                <tr>
                    <td>Project:</td>
                    <td><a href="https://github.com/Pixel-Synth/Quiz-Master">Click Here!</a></td>
                </tr>
            </table>
        </div>
    );
}

export default UserPosts;