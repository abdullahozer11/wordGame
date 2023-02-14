import React, {Component} from 'react';
import './Tile.css'
import gsap from "gsap";


class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letter: 'X',
        }

        this.tileRef = React.createRef();

        this.timeline = gsap.timeline({
            paused: true,
            defaults: {duration: 1, ease: "linear"},
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.letter !== this.props.letter) {
            this.rotateTile(this.tileRef);
        }
    }

    rotateTile(currentTarget) {
        const nextLetter = this.props.letter;
        this.timeline.to(currentTarget, {rotateX: 90})
            .to(currentTarget, {rotateX: 270, duration: 0})
            .set(currentTarget, {textContent: nextLetter})
            .to(currentTarget, {rotateX: 360})
        this.timeline.play();
        this.setState({letter: nextLetter});
    }

    render() {
        return (
            <div className="tile-container">
                <div className={'tile'} ref={this.tileRef}>{this.state.letter}</div>
            </div>
        );
    }
}

export default Tile;
