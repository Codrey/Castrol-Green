import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from "jquery";

class FleetInput extends Component {
  render(){
    // Range Slider 
    $(function() {
      var $document   = $(document),
          $inputRange = $('input[type="range"]');
      
      // Value Feedback
      function valueOutput(element) {
          var value = element.value,
              output = element.parentNode.getElementsByTagName('output')[0];
          output.innerHTML = value;
          // Logging Value *************************************************
          console.log(value);
      }
      for (var i = $inputRange.length - 1; i >= 0; i--) {
          valueOutput($inputRange[i]);
      };
      $document.on('input', 'input[type="range"]', function(e) {
          valueOutput(e.target);
      });
      // end
      // ******************************************************************
      // $inputRange.rangeslider({
      //   polyfill: false 
      // });

    });

    // Heavey Commercial Vehicles
    const hcVehicle = (
      <div>
        <div className="card col m4 input">
          <div className="card-content">
            <h1 className="card-title red-text">{this.props.fleet.hcvTitle}</h1>
            <div>
              <span>{this.props.fleet.cmTitle}</span>
              <output className="output right"></output>
              <input type="range" min="1" max="10" step="" Value="1" />
            </div>            
            <div>
              <span>{this.props.fleet.anTitle}</span>
              <output className="output right">kms/lt</output>
              <input type="range" min="10,000" max="160000" step="100" Value="0" />
            </div>               
            <div>
              <span>{this.props.fleet.vifTitle}</span>
              <output className="output right"></output>
              <input type="range" min="0" max="200" step="10" Value="0" />
            </div> 
            <hr/>              
            <div>
              <span>{this.props.fleet.cdcTitle}</span>
              <output className="output right"></output>
              <input type="range" min="50" max="300" step="10" Value="50" />
            </div>            
            <div>
              <span>{this.props.fleet.apiTitle}</span>
              <output className="output right"></output>
              <input type="range" min="150" max="500" step="10" Value="150" />
            </div>               
            <div>
              <span>{this.props.fleet.rxTitle}</span>
              <output className="output right"></output>
              <input type="range" min="250" max="500" step="10" Value="250" />
            </div>               
          </div>
        </div>
      </div>
    )

    // Medium Commercial Vehicles
    const mcVehicle = (
      <div>
        <div className="card col m4 input">
          <div className="card-content">
            <h1 className="card-title red-text">{this.props.fleet.mcvTitle}</h1>
            <div>
              <span>{this.props.fleet.cmTitle}</span>
              <output className="output right">kms/lt</output>
              <input type="range" min="1" max="10" step="" Value="1" />
            </div>            
            <div>
              <span>{this.props.fleet.anTitle}</span>
              <output className="output right"></output>
              <input type="range" min="10,000" max="160000" step="100" Value="0" />
            </div>               
            <div>
              <span>{this.props.fleet.vifTitle}</span>
              <output className="output right"></output>
              <input type="range" min="0" max="200" step="10" Value="0" />
            </div>  
            <hr/>             
            <div>
              <span>{this.props.fleet.cdcTitle}</span>
              <output className="output right"></output>
              <input type="range" min="50" max="300" step="10" Value="50" />
            </div>            
            <div>
              <span>{this.props.fleet.apiTitle}</span>
              <output className="output right"></output>
              <input type="range" min="150" max="500" step="10" Value="150" />
            </div>               
            <div>
              <span>{this.props.fleet.rxTitle}</span>
              <output className="output right"></output>
              <input type="range" min="250" max="500" step="10" Value="250" />
            </div>               
          </div>
        </div>
      </div>
    )

    // Light Commercial Vehicles
    const lcVehicle = (
      <div>
        <div className="card col m4 input">
          <div className="card-content">
            <h1 className="card-title red-text">{this.props.fleet.lcvTitle}</h1>
            <div>
              <span>{this.props.fleet.cmTitle}</span>
              <output className="output right"></output>
              <input type="range" min="1" max="10" step="" Value="1" />
            </div>            
            <div>
              <span>{this.props.fleet.anTitle}</span>
              <output className="output right"></output>
              <input type="range" min="10,000" max="160000" step="100" Value="0" />
            </div>               
            <div>
              <span>{this.props.fleet.vifTitle}</span>
              <output className="output right"></output>
              <input type="range" min="0" max="200" step="10" Value="0" />
            </div>
            <hr/>        
            <div>
              <span>{this.props.fleet.cdcTitle}</span>
              <output className="output right"></output>
              <input type="range" min="50" max="300" step="10" Value="50" />
            </div>            
            <div>
              <span>{this.props.fleet.apiTitle}</span>
              <output className="output right"></output>
              <input type="range" min="150" max="500" step="10" Value="150" />
            </div>               
            <div>
              <span>{this.props.fleet.rxTitle}</span>
              <output className="output right"></output>
              <input type="range" min="250" max="500" step="10" Value="250" />
            </div>               
          </div>
        </div>
      </div>
    )


    return (
      <div>
        <div className="container row ">
          <h4 className="center">Fleet Input</h4>
          {hcVehicle}
          {mcVehicle}
          {lcVehicle}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
    return {
      fleet: state.fleet.input
    }
  }
  
export default connect(mapStateToProps)(FleetInput)