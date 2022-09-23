import './App.css'
import React, { Component } from 'react'
import ListItem from './ListItem'



class MyList extends Component {

  state = {
    taskArray: this.props.theList,
    newItem: ''
  }

  handleChange = e => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = e => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ''
      }
    })
  }

  clearList = () => {
    console.log('clearing list')
    this.setState({
      taskArray: []
    })
  }

  render() {
    let toDOItems = this.state.taskArray.map((item, index) => {
      return <ListItem task={item} key={index} />
    })

    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
         {toDOItems}
        </ul>
        <form onSubmit={this.addItem}>
          <input type="text"
          placeholder="Type an item here"
          onChange={this.handleChange}
          value={this.state.newItem}
          />
          <button type={"submit"}>Add it!</button>
        </form>
        <button onClick={this.clearList}>Clear to dos!</button>
      </div>
    )
  }
}

export default MyList