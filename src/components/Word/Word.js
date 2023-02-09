import React, {Component} from 'react';
import LetterCube from "../LetterCube/LetterCube";
import "./Word.css";


class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: 0,
            firstLetterList: ['A', 'B', 'C', 'D', 'E', 'F'],
            secondLetterList: ['A', 'B', 'C', 'D', 'E', 'F'],
            thirdLetterList: ['A', 'B', 'C', 'D', 'E', 'F'],
            forthLetterList: ['A', 'B', 'C', 'D', 'E', 'F'],
            fifthLetterList: ['A', 'B', 'C', 'D', 'E', 'F'],
        }
    }

    componentDidMount() {
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
                <LetterCube letterList={this.state.firstLetterList}/>
                <LetterCube letterList={this.state.secondLetterList}/>
                <LetterCube letterList={this.state.thirdLetterList}/>
                <LetterCube letterList={this.state.forthLetterList}/>
                <LetterCube letterList={this.state.fifthLetterList}/>
            </div>
        );
    }
}

export default Word;
