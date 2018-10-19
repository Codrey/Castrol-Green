// import introReducer from './introReducer';
import vehicleReducer from './vehiclesReducer';
import resultsReducer from './resultsReducer';
import summaryReducer from './summaryReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
//  intro: introReducer,
  fleet: vehicleReducer,
  summary: summaryReducer,
  results: resultsReducer
});

  
export default rootReducer;