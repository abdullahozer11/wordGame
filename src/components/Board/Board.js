import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Word from "../Word/Word";
import "./Board.css";


class Board extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Word/>
                <ScoreBoard/>
            </div>
        );
    }
}

Board.propTypes = {};

export default Board;
