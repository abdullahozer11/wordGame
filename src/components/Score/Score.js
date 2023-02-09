import React, {Component} from 'react';
import "./Score.css";


class Score extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'scorewrapper'}>
                <p>Number of words found:</p>
                <p>{this.props.score}</p>
            </div>
        );
    }
}

export default Score;
