import React, {Component} from 'react';
import './Welcome.css'

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
            <div className={'welcome-div'}>
                <div className={'tiles-row'}>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-11'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-12'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-13'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-14'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-15'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-16'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-17'}>X</div>
                        </div>
                    </div>
                </div>
                <div className={'tiles-row'}>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-21'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-22'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-23'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-24'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-25'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-26'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-26'}>X</div>
                        </div>
                    </div>
                </div>
                <div className={'tiles-row'}>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-31'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-32'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-33'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-34'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-35'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-36'}>X</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile'} id={'tile-37'}>X</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
