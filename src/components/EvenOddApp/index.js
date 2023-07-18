// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0, value: 'Even'}

  onIncrement = () => {
    let {number} = this.state
    number = parseInt(Math.random() * 100)
    this.setState(() => ({number: number + 0}))
    if (number % 2 === 0) {
      this.setState(() => ({value: 'Even'}))
    } else {
      this.setState(() => ({value: 'Odd'}))
    }
  }

  render() {
    const {number, value} = this.state
    const randomApp = (
      <div className="random-bg-cont">
        <div className="random-cont">
          <h1 className="count-head">Count {number}</h1>
          <p className="count-ans">Count is {value}</p>
          <button
            className="increment-btn"
            type="button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="info">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
    return randomApp
  }
}

export default EvenOddApp
