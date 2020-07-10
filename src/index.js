
import Header from "./js/header";
import SideMenu from "./js/Side_Menu"
import InnerContent, {CurrentDate} from "./js/Main_Content"
import TodoList from "./js/Main_Content";
import React from "react";
import ReactDOM from "react-dom";
import "./css/main.css";

var cont = document.querySelector("#container");

ReactDOM.render(
    <div>
        <h1 className={"today"}>Today<div className={"current-date"}><CurrentDate/></div> </h1>
        <TodoList/>
    </div>,
    cont
);