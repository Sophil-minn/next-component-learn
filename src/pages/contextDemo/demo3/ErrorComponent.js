import React, { Component } from 'react';



class ErrorComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        });

    }

    render() {
        console.log('component ErrorComponent render...');
        const { counter } = this.state;
        const { handleClick } = this;
        // let d = d;
        if (counter === 5) {
          throw new Error('counter creashed!');
        }
        return (
            <>
                <p>this component will throw Error when the counter equal to 5</p>
                <p>counter : {counter}</p>
                <button onClick={handleClick}>add</button>
            </>
        )
    }
}

export default ErrorComponent;