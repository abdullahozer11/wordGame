import React, {Component} from 'react';
import Board from "../Board/Board";
import Welcome from "../Welcome/Welcome";
import './Game.css'


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={'game'}>
                <Welcome/>
                <Board/>
            </div>
        );
    }
}

export default Game;
