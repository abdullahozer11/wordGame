import React, {Component} from 'react';
import "./Score.css";


class Score extends Component {
    render() {
        return (
            <div className={'score-wrapper'}>
                <p>SCORE:</p>
                <p>{this.props.score}</p>
            </div>
        );
    }
}

export default Score;
