import "./App.css";
import React from "react";
import  FullName  from "./component/profile/FullName";
import  Address  from "./component/profile/Address";
import  ProfilePhoto  from "./component/profile/ProfilePhoto";

function App() {
  return (
    <div >
      this is my name : <FullName/>
      adress : <Address/>
      photo: <ProfilePhoto/>
    </div> 
  );
}
export default App;
