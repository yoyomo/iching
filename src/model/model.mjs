export const NUMBER_OF_LINES = 6;
export const NUMBER_OF_COINS = 3;
export const model =
{
  coins: new Array(NUMBER_OF_LINES).fill(new Array(NUMBER_OF_COINS).fill(0))
, lines: new Array(NUMBER_OF_LINES).fill(0)
, currentSelection: {
    r: NUMBER_OF_LINES - 1
  , c: 0
  }
};
