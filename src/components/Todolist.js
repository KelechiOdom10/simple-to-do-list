import React from "react";
import {Icon} from 'semantic-ui-react';

function Todolist(props) {
    return(
        <div className = 'todolist' key ={props.key}> 
            <input type="checkbox" id="todos" name="todos" value="todo" onClick = {props.onClick} />
            <label 
                for="todos"
                style = {{textDecoration: props.todo.isCompleted ? 'line-through': null}}

                // {fontStyle: props.todo.isCompleted ? 'line-through': null} 
            
            >{props.todo.text} </label>
            <Icon className = 'delete' onClick = {props.onDoubleClick}/>
        </div>
    )
}

export default Todolist;