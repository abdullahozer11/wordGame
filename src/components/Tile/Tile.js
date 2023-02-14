import React, {Component} from 'react';
import './Tile.css'
import { gsap } from "gsap";


class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letter: '',
            once: true
        }
        this.tileRef = React.createRef();
    }

    componentDidMount() {
        if (this.state.once) {
            this.setState({letter: this.props.letter, once: false});
            this.tileRef.current.textContent = this.props.letter;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.letter !== this.props.letter) {
            this.rotateTile(this.tileRef.current);
        }
    }

    rotateTile(currentTarget) {
        const nextLetter = this.props.letter;
        gsap.to(currentTarget, {rotateX: 90, duration: 2, ease: 'linear'});
        gsap.to(currentTarget, {rotateX: 270, duration: 0, delay: 2});
        gsap.set(currentTarget, {textContent: nextLetter, delay: 2});
        gsap.to(currentTarget, {rotateX: 360, duration: 2, delay: 2, ease: 'linear'});
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
