import React, {Component} from 'react';
import "./Welcome.css";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        console.log('playing');
    }

    render() {
        return (
            <div className={'tiles-div'}>
                <div className={'tiles-row'}>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                </div>
                <div className={'tiles-row'}>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                </div>
                <div className={'tiles-row'}>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                    <div className={'tile'}/>
                </div>
            </div>
        );
    }
}

export default Welcome;
