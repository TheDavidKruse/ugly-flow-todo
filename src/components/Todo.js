/* @flow */

import React from 'react'

type SingleTodo = {
    id: number,
    title: string,
    description: string 
}

type Props = {
    todo : SingleTodo
}

const Todo = (props: Props) => {
  return (
    <li>
        <h3>{props.todo.title}</h3>
        <p>{props.todo.description}</p>
    </li>
  )
}

export default Todo