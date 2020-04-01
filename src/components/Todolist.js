import React from "react";
import {Icon} from 'semantic-ui-react';

function Todolist(props) {
    return(
        <div className = 'todolist' key ={props.key}> 
            <input type="checkbox" id="todos" name="todos" value="todo" onClick = {props.onClick} />
            <label 
                for="todos"
                style = {{textDecoration: props.todo.isCompleted ? 'line-through': null}}
            
            >{props.todo} </label>
            <Icon className = 'delete' onDoubleClick = {props.onDoubleClick}/>
        </div>
    )
}

export default Todolist;