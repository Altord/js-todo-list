import React, {useReducer} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




function TodoForm(props) {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            title: '',
            desc: '',
        }
    );
    const handleInputChange = evt => {
        evt.preventDefault();
        const name = evt.target.name;
        const newValue = evt.target.value;

        setUserInput({[name]: newValue});


    }
    const dateChange = (date) => {
        setUserInput({date: date.toLocaleDateString()})
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(userInput)
        props.addTask(userInput.title, userInput.desc, userInput.date)
        setUserInput({
            title: "",
            desc: "",
            date: ""
        })


    }


        return(
            <form  name={"new-item"} className={"new-item"} onSubmit={handleSubmit}  >
                <label htmlFor={"title-input"}>
                    Title
                </label>
                <input type={"text"} id={"title-input"} className={"input input__lg"} name={"title"} value={userInput.title} onChange={handleInputChange}/>

                <label htmlFor={"text-input"}>
                    Description
                </label>
                <textarea type={"text"} id={"description-input"}  name={"desc"} value={userInput.desc} onChange={handleInputChange} />

                <label htmlFor={"date-input"}>
                    Date
                </label>
                <DatePicker type={"date"} id={"date-input"}  name={"date-input-field"} value={userInput.date} onChange={dateChange}/>



                <input type={"submit"}  id="submit" name={"submit"} />

            </form >
        )

}

export default TodoForm;