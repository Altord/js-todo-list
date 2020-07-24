import React from "react";
import edit from "../../imgs/edit.png";
import trash from "../../imgs/minus.png";
import {deleteTask, editTask} from "./TodoList"
import addIco from "../../imgs/plus.png";
import TodoEdit from "./TodoEdit";

import Popup from "reactjs-popup";

function TodoTask(props){


    return(
        <li className={"add-item"} >
            <div className={"todo-title"} id={props.id} >{props.title}
                <div id={"todo-date"}>{props.date}</div>

                <Popup contentStyle={{width: "500px"}} className={"modal-box"} trigger={<img id={'edit'} src={edit}/>} modal>
                    <TodoEdit editTask={editTask} />

                </Popup>
            </div>
            <div id={"todo-desc"}>{props.desc}</div>
            <div id={"todo-tags"}/>
            <img onClick={() => props.deleteTask(props.id)} id={'remove'} src={trash} ></img>
        </li>
    )

}

export default TodoTask