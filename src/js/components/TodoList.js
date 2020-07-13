import React,{ Component } from 'react';
import '../../css/main.css'
import addIco from '../../imgs/plus.png'
import Popup from 'reactjs-popup'
import TodoForm from "./TodoForm";

function CurrentDate(){
    let today = new Date().toLocaleDateString()
    return today
}





class  TodoList extends Component {
    state = {
        todoItems: [],

    };

    addTodo = todo => {
        this.setState({
            todoItems: [todo, ...this.state.todoItems]
        });
    }
    removeTodo = todo =>{
        this.setState({

        })
    }

    render() {
        return (
            <div className="inner-content">
                <div id={"tasks-div"}>
                    {this.state.todoItems.map(todo => (
                        <div className={"add-item"} key={todo.id}>
                            <div id={"todo-title"}>{todo.title}<div id={"todo-date"}>{todo.date}</div></div>
                            <div id={"todo-desc"}>{todo.desc}</div>
                            <div id={"todo-tags"}>{todo.tags}</div>
                            <div></div>
                        </div>
                        )
                    )}
                </div>
                <div id={'form-div'}>
                    <Popup
                        trigger={<button className={"new-add-button"}><p><img className={"add-ico"} src={addIco}></img>Add
                            new task</p></button>} modal>
                        <TodoForm onSubmit={this.addTodo}/>

                    </Popup>

                </div>


            </div>
        )
    }

}

export default TodoList;
export  {CurrentDate};