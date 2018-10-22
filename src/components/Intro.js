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
            <div className="container center row BG intoCon">
                <h3 className="card-title ">
                    <span>{this.state.welcome}</span>
                    <br />
                    <span>{this.state.title}</span>
                </h3>
                <div className="">                
                    <img className="container center col s12 m6 offset-m3 z-depth-1" src={vectonIMG} alt="Castrol Oil Vecton" />
                    <p className="col m12 pText" >{this.state.description}</p>
                    <Link to="/fleetinput" className="btn col s6 offset-s3 m6 offset-m3 z-depth-5">Start</Link>
                </div>                    
                <p className="col s12 m6 offset-m3 whiteText z-depth-5">{this.state.smallPrint}</p>
            </div>
        )     
        return (
            <LandingPage />
        );
    }
}

export default Intro;
