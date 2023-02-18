import React, {Component} from 'react';
import "./Score.css";


class Score extends Component {
    colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown'];

    shouldComponentUpdate(nextProps) {
        return this.props.score !== nextProps.score;
    }
    render() {
        const { score, playedWords } = this.props;
        let colorIndex = 0;
        return (
            <div className={'score-wrapper'}>
                <p>SCORE:</p>
                <p>{score}</p>
                <div className="wordListContainer">
                    <ul className="playerWordList">
                        {playedWords.map(word => {
                            const color = this.colors[colorIndex % this.colors.length];
                            colorIndex++;
                            return <li style={{
                                fontSize: score > 8 ? '2em' : '4em',
                                color: color
                            }} key={word}>{word}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Score;
