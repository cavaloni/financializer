import mockVals from './mock-values';

export const CHANGE_RISK_LEVEL = 'CHANGE_RISK_LEVEL';
export const changeRiskLevel = (level) => {
  const riskLevels = mockVals[level];
  return { type: CHANGE_RISK_LEVEL, riskLevels };
};

export const UPDATE_ACTUAL_NUMBERS = 'UPDATE_ACTUAL_NUMBERS';
export const updateActualNumbers = actNums => ({ type: UPDATE_ACTUAL_NUMBERS, actNums });
