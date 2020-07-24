import React,{ useState } from 'react';
import { nanoid } from "nanoid";
import '../../css/main.css'
import addIco from '../../imgs/plus.png'
import edit from "../../imgs/edit.png"
import trash from "../../imgs/minus.png"
import Popup from 'reactjs-popup'
import TodoForm from "./TodoForm";
import TodoTask from "./TodoTask";

function CurrentDate(){
    let today = new Date().toLocaleDateString()
    return today
}




function TodoList(props) {

    const [tasks, setTasks] = useState(props.tasks);

    const taskList = tasks.map(task => ( <TodoTask
        id={task.id}
        title={task.title}
        desc={task.desc}
        date={task.date}
        completed={task.completed}
        key={task.id}
        deleteTask={deleteTask}
        editTask={editTask}
    />))


    function editTask(id,newTitle,newDesc, newDate){
        const editedList = tasks.map(task=> {
            if (id == task.id){
                return{
                    ...task,
                    title: newTitle,
                    desc: newDesc,
                    date: newDate,
                }
            }
            return task
        })
        setTasks(editedList)
    }

    function addTask(title,desc,date) {
        const newTask = { id: "todo-" + nanoid(), title: title, desc: desc, date:date};
        setTasks([...tasks, newTask]);

    }

    function deleteTask(id){
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }


        return (
            <div className="inner-content">
                <div className={"tasks-div"}>
                    {taskList}


                </div>
                <div className={'form-div'}>
                    <Popup contentStyle={{width: "500px"}} className={"modal-box"} trigger={<button className={"new-add-button"}><p><img className={"add-ico"} src={addIco}></img>Add new task</p></button>} modal>
                        <TodoForm addTask={addTask} />

                    </Popup>

                </div>


            </div>
        )

}

export default TodoList;
export  {CurrentDate};