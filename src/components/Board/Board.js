import React, {Component} from 'react';
import Word from "../Word/Word";
import "./Board.css";
import Score from "../Score/Score";


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
    };

    play() {
        console.log(this.state.focusedWord);
        let word = this.state.focusedWord;
        if (!(word in this.state.playedWords)) {
        // if (!(word in this.state.playedWords) && (word in this.dictionary)) {
            this.setState({
                score: this.state.score + 1,
                playedWords: [...this.state.playedWords, word],
            });
        }
    }

    focusedWordChange = (id, letter) => {
        let focusedWord = this.state.focusedWord.split("");
        focusedWord[id] = letter;
        focusedWord = focusedWord.join("");
        this.setState({focusedWord});
        console.log(focusedWord);
    };

    initWord = (word) => {
        console.log(word);
        this.setState({focusedWord: word});
    }

    render() {
        return (
            <div className={'board-div'}>
                <h1>LET'S PLAY</h1>
                <div className={'game-mid-div'}>
                    <Word focusedWordChange={this.focusedWordChange} initWord={this.initWord}/>
                    <button id={'try-button'} onClick={() => this.play()}>PRESS ENTER</button>
                </div>
                <Score/>
            </div>
        );
    }
}

export default Board;
