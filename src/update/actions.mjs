export const chooseCoinSides = ( r, c, value ) => {
  return {
    type: "choose-coin-sides",
    r,
    c,
    value
  }
};

export const chooseCoinTotals = (r, value) => {
  return {
    type: "choose-coin-totals",
    r,
    value
  }
}

export const chooseCurrentCoinSide = value => {
  return {
    type: "choose-current-coin-side",
    value
  }
};

export const chooseCurrentRowCoinSide = (c, value) => {
  return {
    type: 'choose-current-row-coin-side',
    c,
    value
  }
}
