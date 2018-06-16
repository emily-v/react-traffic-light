import React from 'react';

export default class TrafficLight extends React.Component{
    
    constructor(){
        super();
        this.state = {
            clickedLight: null
        };
    }
    
    render(){
        let redSelectedClass = '';
        if (this.state.clickedLight == 'red') redSelectedClass = 'selected';
        let yellowSelectedClass = '';
        if (this.state.clickedLight == 'yellow') yellowSelectedClass = 'selected';
        let greenSelectedClass = '';
        if (this.state.clickedLight == 'green') greenSelectedClass = 'selected';
        return <div>
            <div id="trafficTop"></div>
            <div id="container">
                <div className={"red light "+redSelectedClass} onClick={() => this.setState({ clickedLight: 'red'})}></div>
                <div className={"yellow light "+yellowSelectedClass} onClick={() => this.setState({ clickedLight: 'yellow'})}></div>
                <div className={"green light "+greenSelectedClass} onClick={() => this.setState({ clickedLight: 'green'})}></div>
            </div>
        </div>;
    }
}