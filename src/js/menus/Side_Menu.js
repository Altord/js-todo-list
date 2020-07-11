import React from "react";
import ReactDOM from "react-dom"
import '../../css/side-menu.css'


function SideMenu(){
    return (
        <div className={"sidebar"}>
            <a href="#" id ={"main"} >Main</a>
            <a href="#" id={"today"} >Today</a>
            <a href="#" id={"upcoming"} >Upcoming</a>
        </div>

    )
}

ReactDOM.render(SideMenu(), document.body.appendChild(document.createElement("DIV")))