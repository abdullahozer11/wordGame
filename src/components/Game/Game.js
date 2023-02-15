import React, {Component} from 'react';
import Board from "../Board/Board";
import Welcome from "../Welcome/Welcome";
import './Game.css'


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false
    };
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState({ started: true });
    }
  }

  render() {
    const { started } = this.state;

    return (
      <div className={'game'} onKeyPress={this.handleKeyPress} tabIndex={0}>
        {started ? <Board /> : <Welcome />}
      </div>
    );
  }
}

export default Game;
