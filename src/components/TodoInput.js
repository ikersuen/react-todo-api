import React, { Component } from 'react'

export default class TodoInput extends Component {
  onAdded = () => {
    const {input} = this.refs
    this.props.addNewTodo(input.value)
    input.value = ''
  }

  // onBoxState = (event) => {
  //   if(event.target.checked){
  //     //show completed
  //     this.props.showActiveStatus()
  //   }else{
  //     //show all
  //     this.props.showAllStatus()
  //   }
  // }

  onUpdateFilter = (event) => {
    this.props.updateFilter(this.props.isOnlyActive)
  }
  
  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.onAdded}>add</button>
        {/* <input type="checkBox" onChange={this.onBoxState}/> */}
        <input type="checkBox" checked={this.props.isOnlyActive} onChange={this.onUpdateFilter} />
      </div>
    )
  }
}