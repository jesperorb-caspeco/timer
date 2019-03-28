import React, { Component } from "react";
import { secondsToReadableTime } from "../helpers/helpers";
import Button from "./button/Button";

const DEFAULTS = {
  IDLE_TIMEOUT: 10000,
  TIMER: 180,
  INTERVAL: 1000
};

export interface IAppState {
  seconds: number;
  started: boolean;
  finished: boolean;
}

interface IAppProps {}

class Timer extends Component<IAppProps, IAppState> {
  state: IAppState = {
    seconds: DEFAULTS.TIMER,
    started: false,
    finished: false
  };

  timer: any;
  resetTimeout: any;
  intervalSound: any;
  endSound: any;

  componentDidMount() {
    this.intervalSound = new Audio(require("../assets/wowy.mp3"));
    this.endSound = new Audio(require("../assets/no_one.mp3"));
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  private stopTimer = (): void => {
    clearInterval(this.timer);
  };

  private startTimer = (): void => {
    if (!this.state.started) {
      this.setState({ started: true }, () => {
        this.timer = setInterval(this.countdown, DEFAULTS.INTERVAL);
      });
    }
  };

  private resetTimer = (): void => {
    this.stopTimer();
    this.setState({ seconds: DEFAULTS.TIMER, started: false, finished: false });
  };

  private resetAfterIdle = (): void => {
    this.resetTimeout = setTimeout(this.resetTimer, DEFAULTS.IDLE_TIMEOUT);
    this.setState({ started: false, finished: false });
  };

  private countdown = (): void => {
    const { seconds } = this.state;
    if (seconds > 0) {
      if (!(seconds % 60)) {
        this.intervalSound.play();
      }
      this.setState(previousState => ({ seconds: previousState.seconds - 1 }));
    } else {
      this.stopTimer();
      this.endSound.play();
      this.resetAfterIdle();
      this.setState({ started: false, finished: true });
    }
  };

  private getClassName = (finished: boolean, started: boolean): string => {
    return finished && !started ? "container gradient" : "container";
  };

  private onChange = (event: any) => {
    const value = parseInt(event.target.value, 10)
    this.setState({ seconds: isNaN(value) ? 0 : value })
  }

  render() {
    const { finished, seconds, started } = this.state;
    return (
      <div className={this.getClassName(finished, started)}>
        { !started && <input type="text" value={ seconds } onChange={this.onChange} className="input"/>}
        <h1>{secondsToReadableTime(seconds)}</h1>
        <div className="buttons-container">
          <Button onClick={this.startTimer}>Start</Button>
          <Button onClick={this.stopTimer}>Stop</Button>
          <Button onClick={this.resetTimer}>Reset</Button>
        </div>
      </div>
    );
  }
}

export default Timer;
