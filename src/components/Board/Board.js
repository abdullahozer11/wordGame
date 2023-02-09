import React, {Component} from 'react';
import Word from "../Word/Word";
import "./Board.css";
import Score from "../Score/Score";


class Board extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('keyenter', this.handleKeyEnter);
    }

    componentWillUnmount() {
        window.removeEventListener('keyenter', this.handleKeyEnter);
    }

    handleKeyEnter() {

    }

    try_word() {

    }

    render() {
        return (
            <div className={'board-div'}>
                <h1>LET'S PLAY</h1>
                <div className={'game-mid-div'}>
                    <Word/>
                    <button id={'try-button'} onClick={() => this.try_word()}>PRESS ENTER</button>
                </div>
                <Score/>
            </div>
        );
    }
}

export default Board;
