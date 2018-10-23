import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Results extends Component {
  render(){

    const resultsNav = (

    <React.Fragment>

        {/*  tabs  */}
        <ul className="tabs">
          <li className="tab ">
            <NavLink to="#Fuel" className="active indigo-text text-darken-4 flow-text">{this.props.results.fsTitle}</NavLink>
          </li>
          <li className="tab ">
            <NavLink to="#Cost" className="active indigo-text text-darken-4 flow-text">{this.props.results.csTitle}</NavLink>
          </li>
          <li className="tab ">
            <NavLink to="#Driven" className="active indigo-text text-darken-4 flow-text">{this.props.results.akdTitle}</NavLink>
          </li>
          <li className="tab ">
            <NavLink to="#Enviromental" className="active indigo-text text-darken-4 flow-text">{this.props.results.esTitle}</NavLink>
          </li>
        </ul>      
      </React.Fragment>

    );

    const fuelResults = (

      <div className="col s12 l6 offset-l2 z-depth-3">      
        <div id="Fuel" path='/Fuel' className="col s12">
          <div className="card">
            <div className="card-content">
              <p className="card-title">{this.props.results.fSavings}L</p>            
            </div>
          </div>
        </div>
      </div>

    )

    const costResults = (

      <div className="col s12 l6 offset-l2 z-depth-3">
        <div id="Cost" path='/Cost' className="col s12">
          <div className="card">
            <div className="card-content">
              <p className="card-title">£{this.props.results.cSavings}</p>            
            </div>
          </div>
        </div>
      </div>

    )

    const drivenResults = (

      <div className="col s12 l6 offset-l2 z-depth-3">
        <div id="Driven" path='/Driven' className="col s12">
           <div className="card">
            <div className="card-content">
              <p className="card-title">{this.props.results.akdSavings}</p>            
              <p>{this.props.results.akdSubT}</p>            
            </div>
          </div>
        </div>
      </div>

    )

    const enviromentalResults = (

      <div className="col s12 l6 offset-l2 z-depth-3">
        <div id="Enviromental" path='/Enviromental' className="col s12">
          <div className="card">
            <div className="card-content">
              <p className="card-title">{this.props.results.eSavings}Kg</p>            
            </div>
          </div>
        </div>
      </div>

    )

    return (
      <div>
        <div className="container section">
          <h4 className="center">Results</h4>
          {resultsNav}
          {fuelResults}
          {costResults}
          {drivenResults}
          {enviromentalResults}
        </div>                    
      </div>
    )
  }
};

const mapStateToProps = (state) => {
    return {
        results: state.results.userResults
    }
  }
  
export default connect(mapStateToProps)(Results)
