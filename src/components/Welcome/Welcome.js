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
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                </div>
                <div className={'tiles-row'}>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                </div>
                <div className={'tiles-row'}>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                    <div className="tile-container">
                        <div className={'tile-box'}>
                            <div className={'tile-front'}>X</div>
                            <div className={'tile-back'}>Y</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
