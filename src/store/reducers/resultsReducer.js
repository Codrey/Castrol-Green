const initState = {
  userResults: {
    fsTitle: 'Fuel Savings', fSavings: 1000,
    csTitle: 'Cost Savings', cSavings: 10050,
    akdTitle: 'Additional Km Driven', akdSavings: 25113, akdSubT: 'Extra Kms Saved',
    esTitle: 'Enviromental Savings', eSavings: 250
  }
}
  
const resultsReducer = (state = initState, action) => {

 /*  switch (action.type) {
    case "AGE_UP":
      return {
        ...state,
        age: state.age + action.value,
      };
      break;

    case "AGE_DOWN":
      return {
        ...state,
        age: state.age + action.value,
      };
      break;
    case "DEL_ENTRY":
      return {
        ...state,
      }
      break;
  } */
    return state;
};



export default resultsReducer;

