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
        console.log(forward);
        let nextIndex = forward === 1 ? this.state.index + 1 : this.state.index - 1;
        this.setState({index: nextIndex, transform: `rotateX(${nextIndex * 60}deg)`});
    }

    render() {
        return (
            <div className={'letter-wrapper'}>
                <div className="container">
                    <div className="box" style={{transform: this.state.transform}}>
                        <div className="card" id="face1">
                            <div className={'letterTextWrapper'}>X</div>
                        </div>
                        <div className="card" id="face2">
                            <div className={'letterTextWrapper'}>Y</div>
                        </div>
                        <div className="card" id="face3">
                            <div className={'letterTextWrapper'}>Z</div>
                        </div>
                        <div className="card" id="face4">
                            <div className={'letterTextWrapper'}>A</div>
                        </div>
                        <div className="card" id="face5">
                            <div className={'letterTextWrapper'}>E</div>
                        </div>
                        <div className="card" id="face6">
                            <div className={'letterTextWrapper'}>C</div>
                        </div>
                    </div>
                </div>
                <button id="nextButton" onClick={() => this.rotate(1)}>Next</button>
                <button id="prevButton" onClick={() => this.rotate(-1)}>Previous</button>
            </div>
        );
    }
}

export default LetterCube;
