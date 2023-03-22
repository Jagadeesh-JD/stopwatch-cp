// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimeRunning: false, elapsedTimeInSec: 0}

  componentWillUnmount = () => {
    clearInterval(this.timeInterval)
  }

  onClickReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, elapsedTimeInSec: 0})
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  updateTimer = () => {
    this.setState(prevState => ({
      elapsedTimeInSec: prevState.elapsedTimeInSec + 1,
    }))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimeRunning: true})
  }

  renderSeconds = () => {
    const {elapsedTimeInSec} = this.state
    const seconds = Math.floor(elapsedTimeInSec % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {elapsedTimeInSec} = this.state
    const minutes = Math.floor(elapsedTimeInSec / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="first-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopwatch-img"
              />
              <p className="name">Timer</p>
            </div>
            <div className="showing-timer">
              <h1 className="timerr">{`${this.renderMinutes()}:${this.renderSeconds()}`}</h1>
            </div>
            <div className="buttons-container">
              <button
                className="start-btn"
                type="button"
                onClick={this.onClickStart}
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button
                className="stop-btn"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="reset-btn"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
