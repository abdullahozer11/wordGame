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

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.play();
        }
    }

    play() {
        let word = this.state.focusedWord;
        if (!this.state.playedWords.includes(word) && (this.isWordValid(word))) {
            console.log(this.isWordValid(word));
            this.setState({
                score: this.state.score + 1,
                playedWords: [...this.state.playedWords, word],
            });
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
            <div className={'board-div'} onKeyPress={this.handleKeyPress}>
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
}

export default Board;
