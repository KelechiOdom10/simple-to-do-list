import React from "react";
import {Icon} from 'semantic-ui-react';

function Todolist(props) {
    return(
        <div className = 'todolist' key ={props.key}> 
            <input type="checkbox" id="todos" name="todos" value="todo" />
            <label for="todos">{props.todo} </label>
            <Icon className = 'delete' onClick = {props.onClick}/>
        </div>
    )
}

export default Todolist;