import React, { Component } from 'react';
import NextHistory from './NextHistory';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false,
    };
    this.timerID = null;
  }

  toggleTimer = () => {
    if (this.state.isRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  };

  startTimer = () => {
    this.setState({ isRunning: true });
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  };

  pauseTimer = () => {
    this.setState({ isRunning: false });
    clearInterval(this.timerID);
  };

  resetTimer = () => {
    this.setState({ time: 0, isRunning: false });
    clearInterval(this.timerID);
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { time, isRunning } = this.state;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      <div className="flex flex-col items-center justify-center ">
         
         
        <div className="text-2xl text-black font-semibold">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        <div className="space-x-4 flex fl-col">

          <button
            className={` py-2 px-6 rounded text-white ${isRunning ? 'bg-black text-white font-semibold' : 'bg-black text-white font-semibold'}`}
            onClick={this.toggleTimer}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            className="px-6 py-2 font-semibold bg-black text-white rounded"
            onClick={this.resetTimer}
          >
            Reset
          </button>

        </div>
      </div>
    );
  }
}

export default Timer;
