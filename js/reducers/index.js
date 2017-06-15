const initialState = {
  riskLevels: [],
  actNums: {
    cash: 0,
    bonds: 0,
    stocks: 0,
    gold: 0,
    annuities: 0,
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_RISK_LEVEL':
      return {
        ...state,
        riskLevels: action.riskLevels,
      };

    case 'UPDATE_ACTUAL_NUMBERS':
      return {
        ...state,
        actNums: action.actNums,
      };

    default:
      return {};
  }
};
