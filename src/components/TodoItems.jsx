import React, { Component } from 'react';

class TodoItems extends Component{
    render(){
        return(
            <div>
                <p>{ this.props.todo.title }</p>
            </div>
        );
    }
}

export default TodoItems;