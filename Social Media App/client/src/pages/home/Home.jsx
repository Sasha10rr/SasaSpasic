 import React from "react";
 import "./home.css"
 import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
export default function Home() {
  return (
    <>
     <Navbar/>
    <div className="homeContainer">

    <Sidebar/> 

    <Feed/>
    <Rightbar/> 
    </div>
   
    </>
  )
}
