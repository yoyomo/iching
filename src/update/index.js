import {NUMBER_OF_LINES, NUMBER_OF_COINS} from '../model';

export const HEADS_VALUE = 3;
export const TAILS_VALUE = 2;

export default {
  init: () => (model, subscriptions) => [{...model}, subscriptions.listenToKeyboard()],
  chooseCoinSides: (r, c, value) => model => ({...model, ...updateCoinValues(model, r, c, value)}),
  chooseCoinTotals: (r, value) => model => {
    const lines = model.lines.slice();
    lines[r] = value;
    return ({...model, lines})
  },
  chooseCurrentCoinSide: value => model => ({...model, ...updateCoinValues(model, model.currentSelection.r, model.currentSelection.c, value)}),
  chooseCurrentRowCoinSide: (c, value) => model => ({...model, ...updateCoinValues(model, model.currentSelection.r, c, value)}),
  chooseCurrentCoinTotal: value => model => {

    if(model.currentSelection < 0) return ({...model});

    const lines = model.lines.slice();
    lines[model.currentSelection.r] = value;

    let currentSelection = {...model.currentSelection};
    currentSelection.r--;
    return ({...model, lines, currectSelection});
  },
  toggle: (attr, on) => model => {
    const toggles = {...model.toggles};
    toggles[attr] = on === undefined || on === null ? !model.toggles[attr] : on;
    return ({...model, toggles});
  },
  reset: () => (model, subscriptions) => [{...model}, subscriptions.reloadPage()],
}

const updateCoinValues = (model, r, c, value) => {

  if(model.currentSelection.r < 0) return ({...model});

  let coins = model.coins.slice();
  coins[r] = coins[r].slice();
  coins[r][c] = value;

  let lines = model.lines.slice();

  if(coins[r].filter(side => !!side).length === 3){
    lines[r] = coins[r].reduce((a, b) => {
      return a + b
    }, 0);
  }

  let currentSelection = {...model.currentSelection};
  currentSelection.c = (c + 1) % NUMBER_OF_COINS;
  if(lines[r]){
    currentSelection.r = r - 1;
  }

  return ({...model, coins, lines, currentSelection});
}
