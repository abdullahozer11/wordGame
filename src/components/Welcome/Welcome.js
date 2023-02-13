import React, {Component} from 'react';
import './Welcome.css'
import Tile from "../Tile/Tile";


class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                </div>
                <div className={'tiles-row'}>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                </div>
                <div className={'tiles-row'}>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                </div>
            </div>
        );
    }
}

export default Welcome;
