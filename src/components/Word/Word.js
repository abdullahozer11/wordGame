import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LetterCube from "../LetterCube/LetterCube";

class Word extends Component {
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
                <div className={'wordWrapper'}>
                    <LetterCube/>
                    <LetterCube/>
                    <LetterCube/>
                    <LetterCube/>
                    <LetterCube/>
                </div>
            </div>
        );
    }
}

Word.propTypes = {};

export default Word;
