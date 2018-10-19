const initState = {
    vehicles: [
      {id: '1', title: 'help me find peace', content: 'blah blah blah'},
      {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
      {id: '3', title: 'hunt for glory', content: 'blah blah blah'}
    ]
  }
  
const vehicleReducer = (state = initState, action) => {
  return state;
}

export default vehicleReducer;