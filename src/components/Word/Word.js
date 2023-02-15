import React, {Component} from 'react';
import LetterCube from "../LetterCube/LetterCube";
import "./Word.css";

const consonants = 'BCDFGHJKLMNPQRSTVWXYZ';
const vowels = 'AEIOU';


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

    getRandomCharacters(characters, count) {
        let result = "";
        let selectedChars = new Set();
        while (result.length < count) {
            let char = characters.charAt(Math.floor(Math.random() * characters.length));
            if (!selectedChars.has(char)) {
                selectedChars.add(char);
                result += char;
            }
        }
        return result;
    }

    setRandomLetters() {
        let _vovels;
        let _consonants;
        for (let i = 0; i < 5; i++) {
            _vovels = this.getRandomCharacters(vowels, 2);
            _consonants = this.getRandomCharacters(consonants, 4);
            this.letters[i][0] = _vovels.charAt(0);
            this.letters[i][1] = _vovels.charAt(1);
            this.letters[i][2] = _consonants.charAt(0);
            this.letters[i][3] = _consonants.charAt(1);
            this.letters[i][4] = _consonants.charAt(2);
            this.letters[i][5] = _consonants.charAt(3);
        }
    }
}

export default Word;
