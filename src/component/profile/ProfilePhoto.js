import "./App.css";
import React from "react";
import photo from "../../img.jpg"

const ProfilePhoto = () => {
 return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Profile Photo</h1>
        <img src={photo} alt="" />
    </div> 
 );
};
export default ProfilePhoto;