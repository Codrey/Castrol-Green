// Refactor Required! ***
const initState = {
    cost: {
      title: 'Cost', eoTitle: '15W-40 Engine Oil', rxTitle: 'Castrol Vecton RX Fuel Saver 10W-40',
      eocTitle: 'Engine Oil Cost / Entire Fleet', eocOil: '???', eocSaving: 12000,
      fcTitle: 'Fuel Cost / Entire Fleet', fcOil: '???', fcSaving: 12000 
    },
    
    travel: {
        title: 'Travel',
        fsTitle: 'Fuel Savings ', fsResults: 3541,
        emdTitle: 'Extra Miles Driven', emdResults: '???',
        pfsTitle: 'Predicted Fuel Savings / Entire Fleet', psfResults: '???'
    },
    
    environmental: {
        title: 'Environmental',  
        ccrTitle: 'Calculated CO2 Reduction / Entire Fleet', ccrResult: 3541,
        etTitle: 'Equivalent Trees', etResult: 650
    },

    annualSavings: {
        title: 'Annual Saving',  
        result: '???'
    },
    
  }
  
const summaryReducer = (state = initState, action) => {
  return state;
}

export default summaryReducer;