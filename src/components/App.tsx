import React from "react";
import Timer from "./Timer";

interface IAppState {
  screen: string;
}

interface IAppProps {}

export default class App extends React.Component<IAppProps, IAppState> {
  state = {
    screen: "timer"
  };

  private static getScreen = (screen: string): JSX.Element => {
    switch (screen) {
      case "timer":
        return <Timer />;
      default:
        return <Timer />;
    }
  };

  /*   private changeScreen = (screen: string): void => {
    this.setState({ screen });
  }; */

  render() {
    return <React.Fragment>{App.getScreen(this.state.screen)}</React.Fragment>;
  }
}
