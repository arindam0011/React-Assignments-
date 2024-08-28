import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            posi: 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    buttonClickHandler() {
        this.setState({
            renderBall: true,
            ballPosition: { left: `${this.state.posi+5}px` }
        });
    }

    handleKeyDown(event) {
        if (event.key === "ArrowRight") {
            this.setState((prevState) => {
                const newPos = prevState.posi + 5; // Increase the left position by 5px
                return {
                    posi: newPos,
                    ballPosition: { left: `${newPos}px` }
                };
            });
        }
    }

    componentDidMount() {
        // Adding keydown event listener
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        // Removing keydown event listener
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
        }
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;
