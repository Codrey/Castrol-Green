import introReducer from './introReducer';
import vehicleReducer from './vehiclesReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  intro: introReducer,
  vehicles: vehicleReducer
});

  
export default rootReducer;