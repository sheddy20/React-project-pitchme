import React, { Component } from 'react';
import Todos from "./components/Todos"


import './App.css'


class App extends Component{

  state = {
    todos: [
      {
        id: 1,
        title: 'wash the cloths',
        user: 'shedrack nicholas',
      },
      {
        id: 2, 
        title: 'join the facebook developer platform',
        user: 'dan abramov',
      }
    ]
  }

  render(){
    console.log(this.state.todos)
    return(
      <div className='app-components'>
        <Todos todos={this.state.todos}/>    
      </div>
    );
  }
}



export default App;