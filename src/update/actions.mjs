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
