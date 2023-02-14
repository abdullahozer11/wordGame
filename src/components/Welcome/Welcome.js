import React, {Component} from 'react';
import './Welcome.css'
import Tile from "../Tile/Tile";


class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: [['*', '*', '*', '*', '*', '*', '*'],
                   ['W', 'E', 'L', 'C', 'O', 'M', 'E'],
                   ['*', '*', '*', '*', '*', '*', '*']]
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        this.animateWelcomeMessage();
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
                    <Tile letter={this.state.text[0][0]}/>
                    <Tile letter={this.state.text[0][1]}/>
                    <Tile letter={this.state.text[0][2]}/>
                    <Tile letter={this.state.text[0][3]}/>
                    <Tile letter={this.state.text[0][4]}/>
                    <Tile letter={this.state.text[0][5]}/>
                    <Tile letter={this.state.text[0][6]}/>
                </div>
                <div className={'tiles-row'}>
                    <Tile letter={this.state.text[1][0]}/>
                    <Tile letter={this.state.text[1][1]}/>
                    <Tile letter={this.state.text[1][2]}/>
                    <Tile letter={this.state.text[1][3]}/>
                    <Tile letter={this.state.text[1][4]}/>
                    <Tile letter={this.state.text[1][5]}/>
                    <Tile letter={this.state.text[1][6]}/>
                </div>
                <div className={'tiles-row'}>
                    <Tile letter={this.state.text[2][0]}/>
                    <Tile letter={this.state.text[2][1]}/>
                    <Tile letter={this.state.text[2][2]}/>
                    <Tile letter={this.state.text[2][3]}/>
                    <Tile letter={this.state.text[2][4]}/>
                    <Tile letter={this.state.text[2][5]}/>
                    <Tile letter={this.state.text[2][6]}/>
                </div>
            </div>
        );
    }

    animateWelcomeMessage() {
        // wait 2 seconds
        setTimeout(() => {
            this.setState({text: [['*', 'L', 'E', 'T', 'S', '*', '*'],
                                  ['*', 'P', 'L', 'A', 'Y', '!', '*'],
                                  ['*', 'W', 'O', 'R', 'D', 'S', '*']]});
            setTimeout(() => {
                this.setState({text: [['*', 'P', 'R', 'E', 'S', 'S', '*'],
                                  ['*', 'E', 'N', 'T', 'E', 'R', '*'],
                                  ['&', 'S', 'T', 'A', 'R', 'T', '.']]});
            }, 4000);
        }, 4000);
    }
}

export default Welcome;
