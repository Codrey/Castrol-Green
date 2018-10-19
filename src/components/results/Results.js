import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Results extends Component {
  render(){
    const { userResults } = this.props
    const resultsData = userResults.length ? (
        userResults.map(results => {
        return (
        <div>
            <div className="card" key={results.id}>
                <div className="card-content">
                <h1 className="card-title red-text">{results.title}</h1>
                <p>{results.savings }</p>             
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
          {resultsData}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
    return {
        userResults: state.results.userResults
    }
  }
  
export default connect(mapStateToProps)(Results)














// import React from "react";

// const Results = () => {
//     return (
//         <div className="container">
//             <h4 className="center" >This is the Results page</h4>
//             <p>Lorem ipsum is a placeholder text (filler text) in publishing and graphic design. It is used to demonstrate the graphics elements of a document, such as font, typography, and layout.</p>
//         </div>
//         )
//     }

// export default Results;