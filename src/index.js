
import Header from "./js/menus/header";
import SideMenu from "./js/menus/Side_Menu"
import InnerContent, {CurrentDate} from "./js/TodoList"
import TodoList from "./js/TodoList";
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