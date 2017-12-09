/* @flow */

import React, {Component} from 'react';
import Todo from './Todo';

type Props = {
  todos: Array<{
    id: number,
    title: string,
    description: string
  }>,
  handleSubmit: Function
};

type State = {
  title: string,
  description: string
}

class TodoList extends Component <Props, State> {

  handleTitleUpdate = (e: Object) => {
    this.setState({
      title: e.target.value
    })
    console.log(this.state)
  }

  handleDescUpdate = (e: Object) => {
    this.setState({description:e.target.value})
    console.log(this.state)
  }

  handleObjectAssign = () => {
    let newObj = {
      title: this.state.title,
      description: this.state.description
    }
    this.props.handleSubmit(newObj)
  }

  state = {
    title: '',
    description: '',
  }

  render() {
    console.log(this.props)
    let mappedTodos = this.props.todos.map((todo) => <Todo key={todo.id} todo={todo}/>)
    return (
    <div>
      <ol>
        {mappedTodos}
      </ol>
      <label>Title</label>
      <input onChange={this.handleTitleUpdate}/>
      <br/>
      <label>Description</label>
      <input onChange={this.handleDescUpdate}/>
      <br/>
      <button onClick={() => this.handleObjectAssign()}>
        submit todo
      </button>
    </div>
  )
  }
}

export default TodoList;
