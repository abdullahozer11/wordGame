import React, {Component} from 'react';
import "./LetterCube.css";

const box = document.querySelector(".box");

class LetterCube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
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

    rotate = (forward) => {
        if (forward) {
            this.setState({index: this.state.index + 1});
            box.style.transform = `rotateX(${this.state.index * 60}deg)`;
        } else {
            this.setState({index: this.state.index - 1});
            box.style.transform = `rotateX(${this.state.index * 60}deg)`;
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <div className="container">
                    <div className="box">
                        <div className="card" id="face1">X</div>
                        <div className="card" id="face2">Y</div>
                        <div className="card" id="face3">Z</div>
                        <div className="card" id="face4">A</div>
                        <div className="card" id="face5">E</div>
                        <div className="card" id="face6">C</div>
                    </div>
                </div>
                <button id="nextButton" onClick={this.rotate(1)}>Next</button>
                <button id="prevButton" onClick={this.rotate(-1)}>Previous</button>
            </div>
        );
    }
}

export default LetterCube;
