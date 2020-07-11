import React,{ Component } from 'react';
import ReactDOM from "react-dom";
import '../css/main.css'
import addIco from '../imgs/plus.png'
import Popup from 'reactjs-popup'
import TodoForm from "./TodoForm";

function CurrentDate(){
    let today = new Date().toLocaleDateString()
    return today
}





class TodoList extends Component {
    state = {
        todoItems: [],
        todoToShow: "all",
        toggleAllComplete: true
    };


    addNewItem = todo => {
        this.setState(state => ({
            todos: [todo, ...state.todos]
        }));
    };
    render() {
        return (
            <div className="inner-content">
                <div id={"tasks-div"}>

                </div>
                <div id={'form-div'}>
                    <Popup
                        trigger={<button className={"new-add-button"}><p><img className={"add-ico"} src={addIco}></img>Add
                            new task</p></button>} modal>
                        <TodoForm/>

                    </Popup>

                </div>


            </div>
        )
    }

}

export default TodoList;
export  {CurrentDate};