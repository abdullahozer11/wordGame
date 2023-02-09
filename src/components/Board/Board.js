import React, {Component} from 'react';
import Word from "../Word/Word";
import "./Board.css";
import Score from "../Score/Score";


class Board extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown = (event) => {
        switch (event.key) {
            case 'Enter':
                this.play();
                break;
            default:
                break;
        }
    };

    play(kwargs) {
        // kwargs[word]

    }

    render() {
        return (
            <div className={'board-div'}>
                <h1>LET'S PLAY</h1>
                <div className={'game-mid-div'}>
                    <Word/>
                    <button id={'try-button'} onClick={() => this.play()}>PRESS ENTER</button>
                </div>
                <Score/>
            </div>
        );
    }
}

export default Board;
