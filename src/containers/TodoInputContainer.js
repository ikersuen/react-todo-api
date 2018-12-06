import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput.js'
import TodoInputResource from '../api'

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: newTodo => {
    const newTodoItem = {
      content: newTodo,
      status: "active"
    }
    TodoInputResource.createTodo(newTodoItem)
    .then(res => res.json())
    .then(({id, status, content}) => {
      dispatch({
        type: 'ADD_TODO',
        payload: {id, status, content}
      })
    })
  },
  updateFilter: status => {
    dispatch({
      type: "SET_FILTER",
      payload: !status
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