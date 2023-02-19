import React, {Component} from 'react';
import Word from "../Word/Word";
import "./Board.css";
import Score from "../Score/Score";
import axios from "axios";

import { API_URL } from "../../constants.js";
import LetterCube from "../LetterCube/LetterCube";


class Board extends Component {
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            playedWords: [],
            score: 0,
            focusedWord: '',
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
            tip_display: true,
        }
        this.localStorageName = 'Words Game Progression';
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        // load state from local storage
        const savedState = window.localStorage.getItem(this.localStorageName);
        if (savedState) {
            const {year, month, day, ...rest} = JSON.parse(savedState);
            if (new Date(year, month, day) === new Date()) {
                this.setState(rest);
            } else {
                window.localStorage.removeItem(this.localStorageName);
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState !== this.state) {
            window.localStorage.setItem(this.localStorageName, JSON.stringify(this.state));
        }
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

    async play() {
        let word = this.state.focusedWord;
        try {
            const isValid = await this.isWordValid(word);
            if (!this.state.playedWords.includes(word) && isValid) {
                this.setState({
                    score: this.state.score + 1,
                    playedWords: [...this.state.playedWords, word],
                });
                this.indicateCorrectWord();
            } else {
                this.indicateIncorrectWord();
            }
        } catch (error) {
            console.error(error);
        }
    }

    async isWordValid(word) {
        try {
            const response = await axios.post(API_URL + 'validate/', {'word': word});
            return (response.data['answer'] === 'valid');
        } catch (error) {
            console.error(error);
        }
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

    handleClose() {
        this.setState({tip_display: false});
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
                <Score score={this.state.score} playedWords={this.state.playedWords}/>
                <div className={`tips-window ${this.state.tip_display ? 'display-tip' : 'hide-tip'}`}>
                    <div className="tip-text">
                        rotate letters to form many words
                    </div>
                    <div className="tip-animation">
                        <LetterCube id={99} letterList={['A', 'B', 'C', 'D', 'E', 'F']} focus={false} dummy={true}/>
                        <img src={require('../../images/hand.png')} alt={'hand'}/>
                    </div>
                          <button className="close-tip-button" onClick={() => this.handleClose()}>Close</button>
                </div>
            </div>
        );
    }
}

export default Board;
