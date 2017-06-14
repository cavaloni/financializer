const initialState = {
  level: 0,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_RISK_LEVEL':
      return {
        ...state,
        level: action.level,
      };
    default:
      return {};
  }
}
