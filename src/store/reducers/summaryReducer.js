// Refactor Required! ***
const initState = {
    cost: [
      {
        eocTitle: 'Engine Oil Cost / Entire Fleet', eocOil: '???', eocSaving: 12000,
        fcTitle: 'Fuel Cost / Entire Fleet', fcOil: '???', fcSaving: 12000 
      },
    ],
    travel: [
      {
        fsTitle: 'Fuel Savings ', fsResults: 3541,
        emdTitle: 'Extra Miles Driven', emdResults: '???',
        pfsTitle: 'Predicted Fuel Savings / Entire Fleet', psfResults: '???'
      },
    ],
    environmental: [
      {
        ccrTitle: 'Calculated CO2 Reduction / Entire Fleet', ccrResult: 3541,
        etTitle: 'Equivalent Trees', etResult: 650
      },
    ]
  }
  
const summaryReducer = (state = initState, action) => {
  return state;
}

export default summaryReducer;