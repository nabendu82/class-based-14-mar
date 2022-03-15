import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount(){
        // this.state.count = this.state.count + 1;
        this.setState({
            count: this.state.count + 1
        }, () => console.log(this.state.count))
        
    }

    render() {
        return (
            <>
                <h1>Count - {this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
            </>
        )
    }
}

export default Counter
