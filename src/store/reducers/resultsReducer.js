const initState = {
    userResults: [
      {id: '1', title: 'Fuel Savings', savings: 1000 },
      {id: '2', title: 'Cost Savings', savings: 10050 },
      {id: '3', title: 'Additional Km Driven', savings: 25113 },
      {id: '4', title: 'Enviromental Savings', savings: 250 }
    ]
  }
  
const resultsReducer = (state = initState, action) => {
  return state;
}

export default resultsReducer;