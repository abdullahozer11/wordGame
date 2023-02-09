import React, {Component} from 'react';
import LetterCube from "../LetterCube/LetterCube";
import "./Word.css";


class Word extends Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <div>
                <div className={'wordWrapper'}>
                    <LetterCube/>
                    <LetterCube/>
                    <LetterCube/>
                    <LetterCube/>
                    {/*<LetterCube/>*/}
                </div>
            </div>
        );
    }
}

export default Word;
