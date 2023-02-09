import React, {Component} from 'react';
import Word from "../Word/Word";
import "./Board.css";
import Score from "../Score/Score";


class Board extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <Word/>
                <Score/>
            </div>
        );
    }
}

export default Board;
