const initialState = {
  level: 1,
  actNums: {},
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_RISK_LEVEL':
      return {
        ...state,
        level: action.level,
      };
    
    case 'UPDATE_ACTUAL_NUMBERS':
      return {
        ...state,
        actNums: action.actNums,
      };

    default:
      return {};
  }
}
