import React, {Component} from 'react';
import "./LetterCube.css";


class LetterCube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            transform: '',
            focusedLetter: this.props.letterList[0],
            touchStartY: null,
            source: false,
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
        window.addEventListener('touchend', this.handleTouchEnd);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('touchend', this.handleTouchEnd);
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
            <div className={'letter-wrapper'} onTouchStart={this.handleTouchStart}>
                <button className={'cube-ctrl-button'} id="upButton"
                        onClick={() => this.rotate({forward: false})}>
                    <svg viewBox="0 0 50 30">
                        <path d="m 5 10 L 25 3 L 45 10 L 45 12 M 45 12 L 25 6 L 5 12 L 5 10 M 5 17
                                 L 25 10 L 45 17 L 45 19 L 25 13 L 5 19 L 5 17 M 5 24 L 25 17 L 45 24
                                 L 45 26 L 25 20 L 5 26"/>
                    </svg>
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
                        onClick={() => this.rotate({forward: true})}>
                    <svg viewBox="0 0 50 30">
                        <path d="m 45 20 L 25 27 L 5 20 L 5 18 M 5 18 L 25 24 L 45 18 L 45 20 M 45 13 L 25 20
                        L 5 13 L 5 11 L 25 17 L 45 11 L 45 13 M 45 6 L 25 13 L 5 6 L 5 4 L 25 10 L 45 4"/>
                    </svg>
                </button>
            </div>
        );
    }

    handleTouchStart = (event) => {
        this.setState({touchStartY: event.touches[0].clientY, source: true});
    }

    handleTouchEnd = (event) => {
        if (event.changedTouches[0].clientY < this.state.touchStartY && this.state.source) {
            this.rotate({forward: true});
        } else if (event.changedTouches[0].clientY > this.state.touchStartY && this.state.source) {
            this.rotate({forward: false});
        }
        this.setState({touchStartY: null, source: false});
    }
}

export default LetterCube;
