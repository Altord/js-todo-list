
import Header from "./js/menus/header";
import SideMenu from "./js/menus/Side_Menu"
import InnerContent, {CurrentDate} from "./js/components/TodoList"
import TodoList from "./js/components/TodoList";
import React from "react";

import ReactDOM from "react-dom";
import "./css/main.css";

const dateChange = () => {
    let tray = new Date().toLocaleDateString()
    return tray
}
const DATA = [
    { id: "todo-0", title: "This is a test",  desc: "DESCRIPTION", date: dateChange(),    completed: false },
    { id: "todo-1", title: "Nice big test",  desc: "DESCRIPTION", date: dateChange(),    completed: false },
    { id: "todo-2", title: "Repeat", desc: "DESCRIPTION", date: dateChange(),     completed: false }
];


ReactDOM.render(

    <div>
        <h1 className={"today"}>Today<div className={"current-date"}><CurrentDate/></div> </h1>
        <TodoList tasks={DATA} />
    </div>,
    document.querySelector("#container")
);