import React from "react";
import {Input, Button} from 'semantic-ui-react'

function Search(props) {
    return(
    <div>
        <h1>TODO LIST APP</h1>
        <img src={props.src} className="App-logo" alt="logo" />
        <div className = 'search'>     
            <Input 
                placeholder='Add todo...' 
                onChange = {props.onChange} 
                value = {props.value} 
            />
            <Button 
                content='Add Todo' 
                onClick = {props.onClick}
            />
        </div>
    </div>
    )
}

export default Search