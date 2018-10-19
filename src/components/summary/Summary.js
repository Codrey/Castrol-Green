import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

class Summary extends Component {
  render(){
    // Cost Data Table  
    const { cost } = this.props
    const costData = cost.length ? (
        cost.map(cost => {
            return (
            <div>
                <table className="card highlight flow-text">
                    <thead>
                        <tr>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr className=" responsive-table">
                            <th></th>
                            <th>15W-40 Engine Oil</th>
                            <th>Castrol Vecton RX Fuel Saver 10W-40</th>
                        </tr>
                    </thead>
                    <tbody className="responsive-table">
                        <tr>
                            <td>{cost.eocTitle}</td>
                            <td className="center">{cost.eocOil}</td>
                            <td className="center">{cost.eocSaving}</td>
                        </tr>
                        <tr>
                            <td>{cost.fcTitle}</td>
                            <td className="center">{cost.fcOil}</td>
                            <td className="center">{cost.fcSaving}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            )
            })
      ) : (
        <div className="center">No Cost Data</div>
      );

    // Travel Data Table  
    const { travel } = this.props
    const travelData = travel.length ? (
        travel.map(travel => {
            return (
            <div>
                <table className="card highlight flow-text">
                    <thead>
                        <tr>
                            <th>Travel</th>
                        </tr>
                    </thead>
                    <tbody className="responsive-table">
                        <tr>
                            <td>{travel.fsTitle}</td>
                            <td>{travel.fsResults}</td>
                        </tr>
                        <tr>
                        <td>{travel.emdTitle}</td>
                            <td>{travel.emdResults}</td>
                        </tr>
                        <tr>
                        <td>{travel.pfsTitle}</td>
                            <td>{travel.psfResults}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            )
        })
      ) : (
        <div className="center">No Travel Data</div>
      );

    // Environmental Data Table  
    const { environment } = this.props
    const environmentalData = environment.length ? (
        environment.map(environment => {
            return (
            <div>
                <table className="card highlight flow-text">
                    <thead>
                        <tr>
                            <th>Environmental</th>
                        </tr>
                    </thead>
    
                    <tbody className="flow-text responsive-table">
                        <tr>
                            <td>{environment.ccrTitle}</td>
                            <td>{environment.ccrResult}</td>
                        </tr>
                        <tr>
                            <td>{environment.etTitle}</td>
                            <td>{environment.etResult}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            )
        })
      ) : (
        <div className="center">No Travel Data</div>
      );

      const annualSavvings = (

        <table className="card highlight flow-text">
            <thead>
                <tr>
                    <th>Annual Saving</th>
                    <th>{cost.eocTitle} </th>
                </tr>
            </thead>
            <tbody className="flow-text responsive-table">
                <tr>
                    <td>???</td>
                </tr>
            </tbody>
        </table>
      )

    return (
      <div>
        <div className="container home">
          <h1 className="center">Summary</h1>
          {costData}
          {travelData}
          {environmentalData}
          {annualSavvings}
            
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        cost: state.summary.cost,
        travel: state.summary.travel,
        environment: state.summary.environmental
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