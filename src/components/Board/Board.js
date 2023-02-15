import React, {Component} from 'react';
import Word from "../Word/Word";
import "./Board.css";
import Score from "../Score/Score";

const dictionary = require('../../dictionary.js');

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playedWords: [],
            score: 0,
            focusedWord: '',
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        switch (event.key) {
            case 'Enter':
                this.play();
                break;
            default:
                break;
        }
    }

    play() {
        let word = this.state.focusedWord;
        if (!this.state.playedWords.includes(word) && (this.isWordValid(word))) {
            this.setState({
                score: this.state.score + 1,
                playedWords: [...this.state.playedWords, word],
            });
            this.indicateCorrectWord();
        } else {
            this.indicateIncorrectWord();
        }
    }

    isWordValid(word) {
        return dictionary.includes(word);
    }

    focusedWordChange = (id, letter) => {
        let focusedWord = this.state.focusedWord.split("");
        focusedWord[id] = letter;
        focusedWord = focusedWord.join("");
        this.setState({focusedWord});
    };

    initWord = (word) => {
        this.setState({focusedWord: word});
    }

    render() {
        return (
            <div className={'board-div'}>
                <h1>WORDS</h1>
                <div className={'game-mid-div'}>
                    <Word focusedWordChange={this.focusedWordChange} initWord={this.initWord}/>
                    <div className="button-container">
                        <button id={'try-button'} onClick={() => this.play()}>PLAY</button>
                    </div>
                </div>
                <Score score={this.state.score}/>
            </div>
        );
    }

    indicateCorrectWord() {
        let button = document.getElementById('try-button');
        button.style.backgroundColor = 'green';
        setTimeout(() => {
            button.style.backgroundColor = '';
        }, 1000);
    }

    indicateIncorrectWord() {
        let button = document.getElementById('try-button');
        button.style.backgroundColor = 'red';
        setTimeout(() => {
            button.style.backgroundColor = '';
        }, 1000);
    }
}

export default Board;
