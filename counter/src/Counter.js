import React from 'react'
import Clock from './Clock'

class Counter extends React.Component {
  state = { value: 0 }
  inc = () => {
    this.setState({ value: this.state.value + 1 })
  }

  dec = () => {
    this.setState({ value: this.state.value - 1 })
  }
  
  render() {
    const { name } = this.props
    const { value } = this.state
    return (
      <div
        style={{
          backgroundColor: name,
          color: 'white'
        }}
      >
        <Clock />
        <h1>{name} counter</h1>
        <h1> {value} </h1>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default Counter