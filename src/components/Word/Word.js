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
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown = (event) => {
        let word;
        switch (event.key) {
            case 'ArrowRight':
                this.setState({ focus: (this.state.focus + 1) % 5 });
                break;
            case 'ArrowLeft':
                this.setState({ focus: (this.state.focus + 4) % 5 });
                break;
            case 'ArrowEnter':
                this.props.play();
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <div className={'word-div'}>
                <LetterCube id={0} letterList={this.state.firstLetterList} focus={this.state.focus === 0} focusedWordChange={this.props.focusedWordChange} />
                <LetterCube id={1} letterList={this.state.secondLetterList} focus={this.state.focus === 1} focusedWordChange={this.props.focusedWordChange} />
                <LetterCube id={2} letterList={this.state.thirdLetterList} focus={this.state.focus === 2} focusedWordChange={this.props.focusedWordChange} />
                <LetterCube id={3} letterList={this.state.forthLetterList} focus={this.state.focus === 3} focusedWordChange={this.props.focusedWordChange} />
                <LetterCube id={4} letterList={this.state.fifthLetterList} focus={this.state.focus === 4} focusedWordChange={this.props.focusedWordChange} />
            </div>
        );
    }
}

export default Word;
