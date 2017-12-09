/* @flow */
import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from "./components/TodoList";
import './App.css';


type Todo = {
  id: number,
  title: string,
  description: string
}

type State = {
  todos: Array<{
    id: number,
    title: string,
    description: string
  }>,
  counter: number
}

class App extends Component<null,State> {
  
  state = {
    todos: [
      {
        id: 1,
        title: 'How to use flow',
        description: 'Set up todo app'
      },
      {
        id:2,
        title: 'Make todo app',
        description: 'In flow'
      }
    ], 
    counter: 3
  }

  handleSubmit = (Todo: Todo) => {
    console.log('Todo', Todo)
    Todo.id = this.state.counter
    this.setState((prevState) => {
      return {
        todos: prevState.todos.concat(Todo),
        counter: prevState.counter + 1
      }
    })

    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <TodoList todos={this.state.todos} handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

export default App;
