import React, {Component} from 'react';
import './Tile.css'
import gsap from "gsap";


class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        this.timeline = gsap.timeline({
            paused: true,
            defaults: {duration: 1, ease: "linear"},
        });
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    handleClick(currentTarget) {
        this.timeline.to(currentTarget, {rotateX: 90})
            .set(currentTarget, {textContent: 'Y'})
            .to(currentTarget, {rotateX: 270, duration: 0})
            .set(currentTarget, {textContent: 'Z'})
            .to(currentTarget, {rotateX: 360})
        this.timeline.play();
    }

    render() {
        return (
            <div className="tile-container">
                <div className={'tile'} onClick={(e) => this.handleClick(e.target)} id={'tile-11'}>X</div>
            </div>
        );
    }
}

export default Tile;
