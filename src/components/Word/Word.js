import React, {Component} from 'react';
import LetterCube from "../LetterCube/LetterCube";
import "./Word.css";


class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: 0,
        }
    }

    componentDidMount() {
        window.addEventListener('keyenter', this.handleKeyEnter);
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
        window.addEventListener('keyright', this.handleKeyRight);
        window.addEventListener('keyleft', this.handleKeyLeft);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
        window.removeEventListener('keyright', this.handleKeyRight);
        window.removeEventListener('keyleft', this.handleKeyLeft);
    }

    handleKeyDown() {

    }

    handleKeyUp() {

    }

    handleKeyRight() {
        let newFocus = this.state.focus + 1;
        this.setState({
            focus: newFocus,
        })
    }

    handleKeyLeft() {
        let newFocus = this.state.focus - 1;
        this.setState({
            focus: newFocus,
        })
    }

    render() {
        return (
            <div className={'word-div'}>
                <LetterCube letterList={['A', 'B', 'C', 'D', 'E', 'F']}/>
                <LetterCube letterList={['A', 'B', 'C', 'D', 'E', 'F']}/>
                <LetterCube letterList={['A', 'B', 'C', 'D', 'E', 'F']}/>
                <LetterCube letterList={['A', 'B', 'C', 'D', 'E', 'F']}/>
                <LetterCube letterList={['A', 'B', 'C', 'D', 'E', 'F']}/>
            </div>
        );
    }
}

export default Word;
