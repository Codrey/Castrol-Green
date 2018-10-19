// import introReducer from './introReducer';
import vehicleReducer from './vehiclesReducer';
import resultsReducer from './resultsReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
//  intro: introReducer,
  fleet: vehicleReducer,
  results: resultsReducer
});

  
export default rootReducer;