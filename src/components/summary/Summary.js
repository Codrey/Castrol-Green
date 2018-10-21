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
        <div className="container home">

          {costData}
          {travelData}
          {environmentalData}
          {annualSavings}
            
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







// import React from "react";

// const Summary = () => {
//   console.log();
//     return (
//         <div className="container">
//             <h4 className="center" >This is the Summary page</h4>
//             <p>Lorem ipsum is a placeholder text (filler text) in publishing and graphic design. It is used to demonstrate the graphics elements of a document, such as font, typography, and layout.</p>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Item Name</th>
//                     <th>Item Price</th>
//                 </tr>
//                 </thead>

//                 <tbody>
//                 <tr>
//                     <td>Alvin</td>
//                     <td>Eclair</td>
//                     <td>$0.87</td>
//                 </tr>
//                 <tr>
//                     <td>Alan</td>
//                     <td>Jellybean</td>
//                     <td>$3.76</td>
//                 </tr>
//                 <tr>
//                     <td>Jonathan</td>
//                     <td>Lollipop</td>
//                     <td>$7.00</td>
//                 </tr>
//                 </tbody>
//             </table>
//         </div>
//         )
//     }

// export default Summary;