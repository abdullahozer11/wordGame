import React, {Component} from 'react';
import './Tile.css'
import { gsap } from "gsap";


class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letter: '',
        }
        this.tileRef = React.createRef();
        this.componentDidMountCalled = false;
        this.iteration = 0;
    }

    componentDidMount() {
        if (!this.componentDidMountCalled) {
            this.componentDidMountCalled = true;
            this.tileRef.current.textContent = this.props.letter;
            this.setState({letter: this.props.letter});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.letter !== this.props.letter) {
            this.rotateTile(this.tileRef.current);
        }
    }

    rotateTile(currentTarget) {
        const nextLetter = this.props.letter;
        const duration = (Math.floor(Math.random() * 10) + 10) / 10;
        const delay = duration;
        gsap.to(currentTarget, {rotateX: 90 + this.iteration * 360, duration: duration, ease: 'linear'});
        gsap.to(currentTarget, {rotateX: 270 + this.iteration * 360, duration: 0, delay: delay});
        gsap.set(currentTarget, {textContent: nextLetter, delay: delay});
        gsap.to(currentTarget, {rotateX: 360 + this.iteration * 360, duration: duration, delay: delay, ease: 'linear'});
        this.iteration++;
        this.setState({letter: nextLetter});
    }

    render() {
        return (
            <div className="tile-container">
                <div className={'tile'} ref={this.tileRef}/>
            </div>
        );
    }
}

export default Tile;
