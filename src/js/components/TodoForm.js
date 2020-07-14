import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";






export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: {
                title: "",
                desc: "",
                startDate: new Date(),
                tags: ""
            },
            newItem: [],
        }
    };

    handleInputChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value
       })


    };

    dateChange = (date) => this.setState({
        startDate: date

    });

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
           title: this.state.title,
            desc: this.state.desc,
            date: this.state.startDate.toLocaleDateString(),
            tags: this.state.tags,

        },
            );

        this.setState({
            title: ' ',
            desc: ' ',
            startDate: new Date(),
            tags: ' ',
        })

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} name={"new-item"} className={"new-item"}>
                <label htmlFor={"title-input"}>
                    Title
                </label>
                <input id={"title-input"} type={"text"} name={"title"} value={this.state.title}
                       onChange={this.handleInputChange}></input>

                <label htmlFor={"text-input"}>
                    Description
                </label>
                <textarea id={"description-input"} type={"text"} name={"desc"} value={this.state.desc}
                          onChange={this.handleInputChange}></textarea>

                <label htmlFor={"date-input"}>
                    Date
                </label>
                <DatePicker id={"date-input"} type={"date"} name={"date-input-field"} selected={this.state.startDate}
                       onChange={this.dateChange}></DatePicker>
                <label htmlFor={"tag-input"}>
                    Tags:
                </label>
                <input id={"tag-input"} type={"text"} name={"tags"} value={this.state.tags}
                       onChange={this.handleInputChange}></input>


                <input type={"submit"} id="submit" name={"submit"} onClick={this.handleSubmit}></input>

            </form>
        )
    }
}