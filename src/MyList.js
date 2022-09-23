import './App.css'
import React, { Component } from 'react'
import ListItem from './ListItem'



class MyList extends Component {
  render() {
    let toDOItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index} />
    })

    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
         {toDOItems}
        </ul>
      </div>
    )
  }
}

export default MyList