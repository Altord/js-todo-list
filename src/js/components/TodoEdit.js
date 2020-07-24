import React, {useEffect, useReducer, useRef, useState} from "react";
import DatePicker from "react-datepicker";

export default function TodoEdit(props){

    const [newList, setNewList] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            title: '',
            desc: '',
        }
    );
    const handleInputChangeEdit = evt => {
        evt.preventDefault();
        const name = evt.target.name;
        const newValue = evt.target.value;

        setNewList({[name]: newValue});


    }
    const dateChangeEdit = (date) => {
        setNewList({date: date.toLocaleDateString()})
    }

    function handleSubmitEdit(evt) {
        evt.preventDefault();
        console.log(newList)
        props.editTask(props.id, newList.title, newList.desc, newList.date)
        setNewList({
            title: "",
            desc: "",
            date: ""
        })


    }
    return(
        <form  name={"new-item"} className={"new-item"} onSubmit={handleSubmitEdit}  >
            <label htmlFor={"title-input"}>
                Title
            </label>
            <input type={"text"} id={"title-input"} className={"input input__lg"} name={"title"} value={newList.title} onChange={handleInputChangeEdit}/>

            <label htmlFor={"text-input"}>
                Description
            </label>
            <textarea type={"text"} id={"description-input"}  name={"desc"} value={newList.desc} onChange={handleInputChangeEdit} />

            <label htmlFor={"date-input"}>
                Date
            </label>
            <DatePicker type={"date"} id={"date-input"}  name={"date-input-field"} value={newList.date} onChange={dateChangeEdit}/>



            <input type={"submit"}  id="submit" name={"submit"} />

        </form >
    )

}