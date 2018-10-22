import React, { Component } from 'react'
import { connect } from 'react-redux'


class Summary extends Component {
  render(){
    // Cost Data Table  
    const costData = (
        <div>
            <table className="card highlight flow-text">
                <thead>
                    <tr>
                        <th>{this.props.cost.title}</th>
                    </tr>
                </thead>
                <thead>
                    <tr className=" responsive-table">
                        <th></th>
                        <th>{this.props.cost.eoTitle}</th>
                        <th>{this.props.cost.rxTitle}</th>
                    </tr>
                </thead>
                <tbody className="responsive-table">
                    <tr>
                        <td>{this.props.cost.eocTitle}</td>
                        <td className="center">{this.props.cost.eocOil}</td>
                        <td className="center">{this.props.cost.eocSaving}</td>
                    </tr>
                    <tr>
                        <td>{this.props.cost.fcTitle}</td>
                        <td className="center">{this.props.cost.fcOil}</td>
                        <td className="center">{this.props.cost.fcSaving}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

    // Travel Data Table  
    const travelData = (
        <div>
            <table className="card highlight flow-text">
                <thead>
                    <tr>
                        <th>{this.props.travel.title}</th>
                    </tr>
                </thead>
                <tbody className="responsive-table">
                    <tr>
                        <td>{this.props.travel.fsTitle}</td>
                        <td>{this.props.travel.fsResults}</td>
                    </tr>
                    <tr>
                        <td>{this.props.travel.emdTitle}</td>
                        <td>{this.props.travel.emdResults}</td>
                    </tr>
                    <tr>
                        <td>{this.props.travel.pfsTitle}</td>
                        <td>{this.props.travel.psfResults}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

    // Environmental Data Table  
    const environmentalData = (
        <div>
            <table className="card highlight flow-text">
                <thead>
                    <tr>
                        <th>{this.props.environment.title}</th>
                    </tr>
                </thead>

                <tbody className="flow-text responsive-table">
                    <tr>
                        <td>{this.props.environment.ccrTitle}</td>
                        <td>{this.props.environment.ccrResult}</td>
                    </tr>
                    <tr>
                        <td>{this.props.environment.etTitle}</td>
                        <td>{this.props.environment.etResult}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
        
    // Annual Savings Result
    const annualSavings = (
        <table className="card highlight flow-text ">
            <thead>
                <tr>
                    <th className="center">{this.props.annualSavings.title}</th>
                </tr>
            </thead>
            <tbody className="flow-text responsive-table">
                <tr>
                    <td className="center">{this.props.annualSavings.result}</td>
                </tr>
            </tbody>
        </table>
    )

    return (
      <div>
        <div className="container z-depth-5">
          <div className="row" >
                <div className="col m6 z-depth-2">
                    {costData}
                </div>
                <div className="col m6">
                    {travelData}
                </div>
          </div>
          <div className="row" >
                <div className="col m6 l6">
                {environmentalData}
                </div>
                <div className="col s12 m6 l6 z-depth-5">
                    {annualSavings}
                </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        cost: state.summary.cost,
        travel: state.summary.travel,
        environment: state.summary.environmental,
        annualSavings: state.summary.annualSavings
    }
  }
  
export default connect(mapStateToProps)(Summary)


