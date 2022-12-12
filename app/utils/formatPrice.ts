import BigNumber from 'bignumber.js';

export const formatAmount = (amount: BigNumber.Value) => {
  const n = new BigNumber(amount || 0);
  if (n.lte(0)) {
    return '0';
  }
  if (n.lt(1e-6)) {
    return '~0.00';
  }
  if (n.lt(1)) {
    return n.toFixed(6);
  }
  if (n.lt(1e4)) {
    return n.toFixed(2);
  }
  if (n.lt(1e6)) {
    return n.dividedBy(1e3).toFixed(2) + 'K';
  }
  if (n.lt(1e9)) {
    return n.dividedBy(1e6).toFixed(2) + 'M';
  }
  if (n.lt(1e12)) {
    return n.dividedBy(1e9).toFixed(2) + 'B';
  }
  return n.dividedBy(1e12).toFixed(2) + 'T';
};

export const formatUSDPrice = (amount: BigNumber.Value) => {
  const result = formatAmount(amount);
  return (result.includes('~') ? '~' : '') + '$' + result.replace('~', '');
};
