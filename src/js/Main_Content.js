import React,{ Component } from 'react';
import ReactDOM from "react-dom";
import '../css/main.css'
import addIco from '../imgs/plus.png'
import Popup from 'reactjs-popup'

function CurrentDate(){
    let today = new Date().toLocaleDateString()
    return today
}




function TodoList() {
        return (
            <div className="inner-content">
                <div>
                    <Popup trigger = {<button className={"new-add-button"}><p><img className={"add-ico"} src={addIco}></img>Add new task</p> </button>} modal>
                        <form name={"new-item"} className={"new-item"}>
                            <label>
                                Title
                            </label>
                                <input id={"title-input"} type={"text"} name={"title"}></input>
                            <label>
                                Description
                            </label>
                            <textarea id={"description-input"} type={"text"} name={"description"}></textarea>
                            <label>
                                Date
                            </label>
                                <input id={"date-input"} type={"date"} name={"description"}></input>
                            <label>
                                Tags
                            </label>
                                <input id={"tag-input"} type={"text"} name={"tags"}></input>

                            <input type={"submit"} name={"title-submit"}></input>

                        </form>

                    </Popup>

                </div>


            </div>
        )
}

export default TodoList;
export  {CurrentDate};