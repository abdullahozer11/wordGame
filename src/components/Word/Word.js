import React, {Component} from 'react';
import LetterCube from "../LetterCube/LetterCube";
import "./Word.css";
import axios from 'axios';

import { API_URL } from "../../constants.js";


class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: 0,
            word: '',
        }
    }

    componentDidMount() {
        axios.get(API_URL + 'get/').then(response => {
            this.setState({word: response.data.word});
            this.props.initWord(response.data.word[0] + response.data.word[6] + response.data.word[12] + response.data.word[18] + response.data.word[24]);
        });
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
                <LetterCube id={0} letterList={this.state.word.slice(0, 6)} focus={this.state.focus === 0}
                            focusedWordChange={this.props.focusedWordChange} dummy={false}/>
                <LetterCube id={1} letterList={this.state.word.slice(6, 12)} focus={this.state.focus === 1}
                            focusedWordChange={this.props.focusedWordChange} dummy={false}/>
                <LetterCube id={2} letterList={this.state.word.slice(12, 18)} focus={this.state.focus === 2}
                            focusedWordChange={this.props.focusedWordChange} dummy={false}/>
                <LetterCube id={3} letterList={this.state.word.slice(18, 24)} focus={this.state.focus === 3}
                            focusedWordChange={this.props.focusedWordChange} dummy={false}/>
                <LetterCube id={4} letterList={this.state.word.slice(24)} focus={this.state.focus === 4}
                            focusedWordChange={this.props.focusedWordChange} dummy={false}/>
            </div>
        );
    }
}

export default Word;
