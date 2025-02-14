import React from "react";

const Todolist = (props) => {
    return (
        <>
        <div className="todo_style">
        <i className = "fa-solid fa-circle-xmark" aria-hidden="true" onClick={() => {
            props.onSelect(props.id)
            }}></i>
        <li>{props.text}</li>
        </div>
        </>
    )
}
export default Todolist;