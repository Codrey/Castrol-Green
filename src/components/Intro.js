import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import vectonIMG from '../assets/introIMG.png';

class Intro extends Component {
    state = {
        welcome: "Welcome to Castrol's",
        title: "Efficiency Calculator",
        description: 'This demonstrates the potential cost and environmental saving when a Castrol Vecton RX Fuel Saver 10W-40 diesel engine oil compared to a 15W-40 heavy duty diesel engine oil',
        smallPrint: 'Current: Indian Rupee|¶ • Volume: Litres • Fuel Economy Measurement: L/100 km • CO2 Measurement: kg'
    }
    render() {
        const LandingPage = () => (
            <div className="container center">
                <h1 className="">{this.state.welcome}</h1>
                <h1 className="">{this.state.title}</h1>
                <img className="container" src={vectonIMG} alt="Castrol Oil Vecton" />
                <p>{this.state.description}</p>
                <Link to="/fleetinput" className="btn">Start</Link>
                <p>{this.state.smallPrint}</p>
            </div>
        )     
        return (
            <LandingPage />
        );
    }
}

export default Intro;
