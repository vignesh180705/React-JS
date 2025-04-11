import React from "react";
import UserInfo from "./UserInfo";
import ProfileImage from "./ProfileImage";
import UserPosts from "./UserPosts";
export default function ProfilePage(){
    return(
        <div style={{textAlign: 'center'}}>
            <h1>Profile</h1>
            <ProfileImage/>
            <UserInfo/>
            <UserPosts/>
        </div>
    );
}