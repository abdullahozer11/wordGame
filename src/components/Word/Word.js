import React, {Component} from 'react';
import LetterCube from "../LetterCube/LetterCube";
import "./Word.css";

const consonants = 'bcdfghjklmnpqrstvwxyz';
const vowels = 'aeiou';


class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: 0,
        }
        this.letters = [
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
        ]
    }

    componentDidMount() {
        this.setRandomLetters();
        let word = '';
        this.letters.forEach(list => {
            word += list[0];
        });
        this.props.initWord(word);
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowRight':
                this.setState({focus: (this.state.focus + 1) % 5});
                break;
            case 'ArrowLeft':
                this.setState({focus: (this.state.focus + 4) % 5});
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
                <LetterCube id={0} letterList={this.letters[0]} focus={this.state.focus === 0}
                            focusedWordChange={this.props.focusedWordChange}/>
                <LetterCube id={1} letterList={this.letters[1]} focus={this.state.focus === 1}
                            focusedWordChange={this.props.focusedWordChange}/>
                <LetterCube id={2} letterList={this.letters[2]} focus={this.state.focus === 2}
                            focusedWordChange={this.props.focusedWordChange}/>
                <LetterCube id={3} letterList={this.letters[3]} focus={this.state.focus === 3}
                            focusedWordChange={this.props.focusedWordChange}/>
                <LetterCube id={4} letterList={this.letters[4]} focus={this.state.focus === 4}
                            focusedWordChange={this.props.focusedWordChange}/>
            </div>
        );
    }

    getRandomCharacter(str, count) {
        return str.charAt(Math.floor(Math.random() * str.length));
        // todo implement count
    }

    setRandomLetters() {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 6; j++) {
                if (i === 0 || i === 4) {
                    this.letters[i][j] = this.getRandomCharacter(vowels);
                } else {
                    this.letters[i][j] = this.getRandomCharacter(consonants);
                }
            }
        }
    }
}

export default Word;
