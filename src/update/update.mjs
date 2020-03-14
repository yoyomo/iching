import {NUMBER_OF_LINES, NUMBER_OF_COINS} from '../model/model.mjs';

export const HEADS_VALUE = 3;
export const TAILS_VALUE = 2;

export const update = model => action => {
  let effects = [];
  switch (action.type) {
    case "choose-coin-sides":
      model = updateCoinValues(model, action.r, action.c, action.value);
      break;

    case "choose-coin-totals":
      model = {...model};
      model.lines = model.lines.slice();
      model.lines[action.r] = action.value;

      break;

    case 'choose-current-coin-side':
      model = updateCoinValues(model, model.currentSelection.r, model.currentSelection.c, action.value);
      break;

    case 'choose-current-row-coin-side':
      model = updateCoinValues(model, model.currentSelection.r, action.c, action.value);
      break;

  }
  return { model, effects };
};

const updateCoinValues = (model, r, c, value) => {
  model = { ...model };
  model.coins = model.coins.slice();
  model.coins[r] = model.coins[r].slice();
  model.coins[r][c] = value;

  if(model.coins[r].filter(side => !!side).length === 3){
    model.lines = model.lines.slice();
    model.lines[r] = model.coins[r].reduce((a, b) => {
      return a + b
    }, 0);
  }

  model.currentSelection = {...model.currentSelection};
  model.currentSelection.c = (c + 1) % NUMBER_OF_COINS;
  if (model.currentSelection.c === 0) {
    model.currentSelection.r = r - 1;
    if (model.currentSelection.r < 0) model.currentSelection.r = NUMBER_OF_LINES - 1;
  }

  return model;
}
