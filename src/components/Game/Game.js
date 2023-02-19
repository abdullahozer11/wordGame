import React, {Component} from 'react';
import Board from "../Board/Board";
import Welcome from "../Welcome/Welcome";


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: true
    };
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState({ started: true });
    }
  }

  start = () => {
    this.setState({ started: true });
  }

  render() {
    const { started } = this.state;
    return (
      <div className={'game'} onKeyPress={this.handleKeyPress} tabIndex={0}>
        {started ? <Board /> : <Welcome startCallBack={this.start} />}
      </div>
    );
  }
}

export default Game;
