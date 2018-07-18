import React, { Component } from 'react'

const numberCharPlus = () => {
  return (
    <p>正の数です</p>
  )
}
const numberCharMinus = "負"

class CounterWithCharacter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  hadleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render () {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <div>{ this.state.count <0 ? numberCharMinus : numberCharPlus() }</div>
        <button onClick={ this.handlePlusButton }>+</button>
        <button onClick={ this.hadleMinusButton }>-</button>
      </React.Fragment>
    )
  }
}

export default CounterWithCharacter