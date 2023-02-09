import React, {Component} from 'react';
import "./Score.css";


class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className={'scorewrapper'}>
                <p>Number of words found:</p>
                <p>{this.state.score}</p>
            </div>
        );
    }
}

export default Score;
