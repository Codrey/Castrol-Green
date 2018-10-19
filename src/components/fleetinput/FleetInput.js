import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class FleetInput extends Component {
  render(){
    const { fleet } = this.props
    const fleetList = fleet.length ? (
        fleet.map(vehicle => {
        return (
        <div>
            <div className="card" key={vehicle.id}>
                <div className="card-content">
                <h1 className="card-title red-text">{vehicle.title}</h1>
                <p>{vehicle.content}</p>
                <div className="vertically-stacked-slider list">
                    Volume
                    <input type={"range"} value="25" />
                </div>                
                <div className="vertically-stacked-slider">
                    Volume
                    <input type={"range"} value="25" />
                </div>                
                <div className="vertically-stacked-slider">
                    Volume
                    <input type={"range"} value="25" />
                </div>                
            </div>
        </div>

        </div>
        )
      })
    ) : (
      <div className="center">No vehicles match</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Fleet Input</h4>
          {fleetList}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
    return {
      fleet: state.fleet.vehicles
    }
  }
  
export default connect(mapStateToProps)(FleetInput)