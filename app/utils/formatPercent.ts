import BigNumber from 'bignumber.js';

const percentFormat: BigNumber.Format = {
  suffix: '%',
  decimalSeparator: '.',
};

export const formatPercent = (percent: BigNumber) => {
  return percent.decimalPlaces(2, BigNumber.ROUND_DOWN).toFormat(percentFormat);
};
