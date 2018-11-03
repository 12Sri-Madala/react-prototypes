import React, {Component} from 'react';
import Time from "./format_time"

class Stopwatch extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
        }
    }

    start = () => {
        const {start, elapsed} = this.state;
        let newStart = new Date().getTime()

        if (start !== null){
            newStart -= elapsed
        }

        this.setState({
            status: 'running',
            start: newStart
        })

        setTimeout( () => {
            this.update() 
        }, 10);
    }

    stop = () => {
        this.setState({
            status: 'stopped'
        })
    }

    reset = () => {
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0
        })
    }

    update = () => {
        const { status, start } = this.state;
        if(status === 'running'){
            this.setState({
                elapsed: new Date().getTime() - start
            })
            setTimeout( () => {
                this.update() 
            }, 10);
        }
    }
    
    render(){
        const { status, start } = this.state;
        return (
            <div className="jumbotron">
                <h1 className="display-3"><Time elapsed = {this.state.elapsed}/></h1>
                <hr className="my-3"/>
                <p className="lead text-center">{this.state.status}</p>
                <button onClick={this.start} className="brn btn-outline-success mx-3">Start</button>
                <button onClick={this.stop} className="brn btn-outline-danger mx-3">Stop</button>
                <button onClick={this.reset} className="brn btn-outline-warning mx-3">Reset</button>
            </div>
        )
    }
}

export default Stopwatch;