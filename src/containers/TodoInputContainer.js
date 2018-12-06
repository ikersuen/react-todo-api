import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput.js'

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: newTodo => {
    const newTodoItem = {
      content: newTodo,
      status: "active"
    }
    fetch("http://localhost:8080/api/todos", {
      mode: 'cors',
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(newTodoItem)
    })
    .then(res => res.json())
    .then(({id, status, content}) => {
      dispatch({
        type: 'ADD_TODO',
        payload: {id, status, content}
      })
    })
  }
  // showActiveStatus() {
  //   fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=active", {
  //   mode: 'cors',
  //   })
  //  .then(res=>res.json())
  //  .then(res => {
  //     dispatch({
  //     type: "UPDATE_CHECKBOX",
  //     payload: res._embedded.todos
  //   })
  // })
  // },
  // showAllStatus() {
  //   fetch("http://localhost:8080/api/todos", {mode: 'cors'})
  //     .then(res => res.json())
  //     .then(res => {
  //         dispatch({
  //         type: "UPDATE_TODOS",
  //         payload: res._embedded.todos
  //       })
  //     })
  // }
})

const mapStateToProps = state => ({
  isOnlyActive: state.isOnlyActive
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)