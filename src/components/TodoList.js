import React, { Component } from 'react'
import Todos from '../containers/TodosContainer'
//import Todos from './Todos.js' 
import TodoInputContainer from '../containers/TodoInputContainer';
import TodoInputResource from '../api'

export default class TodoList extends Component {
  componentDidMount() {
    TodoInputResource.getAll()
      .then(res => res.json())
      .then(res => {
        this.props.dispatch({
          type: "UPDATE_TODOS",
          payload: res._embedded.todos
        })
      })
  }
  render() {
    return (
      <div>
        <TodoInputContainer/>
        <Todos todos={this.props.todos}/>
      </div>
    )
  }
}