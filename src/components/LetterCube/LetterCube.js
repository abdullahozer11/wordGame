import React, {Component} from 'react';
import "./LetterCube.css";


class LetterCube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            transform: '',
            focusedLetter: this.props.letterList[0],
        }
    }

    myModulus(x, n) {
        return ((x % n) + n) % n;
    };

    rotate = (kwargs) => {
        let nextIndex;
        if (kwargs['forward']) {
            nextIndex = this.state.index + 1;
        } else {
            nextIndex = this.state.index - 1;
        }
        let nextFocusedLetter;
        nextFocusedLetter = this.props.letterList[this.myModulus(nextIndex, 6)]
        this.setState({
            index: nextIndex,
            transform: `rotateX(${nextIndex * 60}deg)`,
            focusedLetter: nextFocusedLetter
        });
        this.props.focusedWordChange(this.props.id, nextFocusedLetter);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (this.props.focus) {
            switch (event.key) {
                case 'ArrowUp':
                    this.rotate({forward: false});
                    break;
                case 'ArrowDown':
                    this.rotate({forward: true});
                    break;
                default:
                    break;
            }
        }
    };

    render() {
        return (
            <div className={'letter-wrapper'}>
                <button className={'cube-ctrl-button'} id="upButton"
                        onClick={() => this.rotate({forward: false})}>Up
                </button>
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
                <button className={'cube-ctrl-button'} id="downButton"
                        onClick={() => this.rotate({forward: true})}>Down
                </button>
            </div>
        );
    }
}

export default LetterCube;
