import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

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
      <div className="center">No results match</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Results</h4>
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



