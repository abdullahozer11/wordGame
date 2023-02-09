import React, {Component} from 'react';
import "./LetterCube.css";


class LetterCube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }
    }

    rotate = (forward) => {
        let nextIndex = forward ? this.state.index + 1 : this.state.index - 1;
        this.setState({index: nextIndex, transform: `rotateX(${nextIndex * 60}deg)`});
    }

    render() {
        return (
            <div className='wrapper'>
                <div className="container">
                    <div className="box" style={{transform: this.state.transform}}>
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
