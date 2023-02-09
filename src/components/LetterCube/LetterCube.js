import React, {Component} from 'react';
import "./LetterCube.css";


class LetterCube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            transform: '',
        }
    }

    rotate = (forward) => {
        let nextIndex = forward === 1 ? this.state.index + 1 : this.state.index - 1;
        this.setState({index: nextIndex, transform: `rotateX(${nextIndex * 60}deg)`});
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown = (event) => {
        if (this.props.focus) {
            switch (event.key) {
                case 'ArrowUp':
                    this.rotate(1);
                    break;
                case 'ArrowDown':
                    this.rotate(-1);
                    break;
                default:
                    break;
            }
        }
    };

    render() {
        return (
            <div className={'letter-wrapper'}>
                <div className="container">
                    <div className="box" style={{transform: this.state.transform}}>
                        <div className="card" id="face1">
                            <div className={'letterTextWrapper'}>{this.props.letterList[0]}</div>
                        </div>
                        <div className="card" id="face2">
                            <div className={'letterTextWrapper'}>{this.props.letterList[1]}</div>
                        </div>
                        <div className="card" id="face3">
                            <div className={'letterTextWrapper'}>{this.props.letterList[2]}</div>
                        </div>
                        <div className="card" id="face4">
                            <div className={'letterTextWrapper'}>{this.props.letterList[3]}</div>
                        </div>
                        <div className="card" id="face5">
                            <div className={'letterTextWrapper'}>{this.props.letterList[4]}</div>
                        </div>
                        <div className="card" id="face6">
                            <div className={'letterTextWrapper'}>{this.props.letterList[5]}</div>
                        </div>
                    </div>
                    <div className={'border'} style={{display: (this.props.focus ? 'block' : 'none')}}/>
                </div>
                <button className={'cube-ctrl-button'} id="nextButton" onClick={() => this.rotate(1)}>Next</button>
                <button className={'cube-ctrl-button'} id="prevButton" onClick={() => this.rotate(-1)}>Previous</button>
            </div>
        );
    }
}

export default LetterCube;
