import React, {Component} from 'react';
import "./Score.css";


class Score extends Component {
    render() {
        return (
            <div className={'score-wrapper'}>
                <p>SCORE:</p>
                <p>{this.props.score}</p>
                <div className="wordListContainer">
                    <ul className="playerWordList">
                        {this.props.playedWords.map(word => <li key={word}>{word}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Score;
