const initState = {
    input: {
      hcvTitle: 'HEAVEY COMMERCIAL VEHICLES',
      mcvTitle: 'MEDIUM COMMERCIAL VEHICLES',
      lcvTitle: 'LIGHT COMMERCIAL VEHICLES',
      cmTitle: 'Current mileage - kms/ltr',
      anTitle: 'Avg Annual kms run',
      vifTitle: '#Vehicles in Fleet (Above 16t GVW)',
      cdcTitle: 'Current Diesel Cost per/ltr',
      apiTitle: 'Current API CI-4 PLUS 15W-40 Engine oil Cost per/ltr',
      rxTitle: 'Current Vecton RX Fuel saver 10W-40 Cost per/ltr'
    }
}

const vehicleReducer = (state = initState, action) => {
  return state;
}

export default vehicleReducer;