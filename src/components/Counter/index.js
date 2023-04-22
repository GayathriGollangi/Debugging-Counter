//import Component
import {Component} from 'react'

import './index.css'

//extending Component
class Counter extends Component {
  state = {count: 0}
  //setState
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <div>
          <button className="button" onClick={this.onIncrement} type="button">
            Increase
          </button>
        </div>
        <div>
          <button className="button" onClick={this.onDecrement} type="button">
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
