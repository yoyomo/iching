import {NUMBER_OF_LINES, NUMBER_OF_COINS, initModel} from '../model';

export const HEADS_VALUE = 3;
export const TAILS_VALUE = 2;

export default {
  init: () => (model, subscriptions) => [{...model}, subscriptions.listenToKeyboard()],
  chooseCoinSides: (r, c, side) => model => ({...model, ...updateCoinValues(model, r, c, side)}),
  chooseLineTotals: (r, value) => model => {
    const lines = model.lines.slice();
    lines[r] = value;
    return ({...model, lines})
  },
  chooseCurrentCoinSide: side => model => ({...model, ...updateCoinValues(model, model.currentSelection.r, model.currentSelection.c, side)}),
  chooseCurrentRowCoinSide: (c, side) => model => ({...model, ...updateCoinValues(model, model.currentSelection.r, c, side)}),
  chooseCurrentLineTotal: value => model => {

    if(model.currentSelection < 0) return ({...model});

    let lines = model.lines.slice();
    lines[model.currentSelection.r] = value;

    let currentSelection = {...model.currentSelection};
    currentSelection.r--;
    return ({...model, lines, currentSelection});
  },
  changeMethod: (methodName) => model => {
    localStorage.setItem('method', methodName);
    return ({...model, method: methodName})
  },
  toggle: (attr, on) => model => {
    const toggles = {...model.toggles};
    toggles[attr] = on === undefined || on === null ? !model.toggles[attr] : on;
    return ({...model, ...afterToggles(model, toggles, attr, on)});
  },
  reset: () => (model) =>({...model, ...initModel()}),
}

const afterToggles = (model, toggles, attr, on) => {
  switch(attr) {
    case "isShowingRules":
      localStorage.setItem('isShowingRules', toggles[attr])
      break;
  }
  return ({...model, toggles});
}

const updateCoinValues = (model, r, c, side) => {


  let value = 0;

  if(model.method ==='yarrow-two-coins'){
    value = side === 'heads' ? 2 : 3;
  } else if (model.method === 'three-coins') {
    value = side === 'heads' ? 3 : 2;
  }

  if(model.currentSelection.r < 0) return ({...model});

  let coins = model.coins.slice();
  coins[r] = coins[r].slice();
  coins[r][c] = value;

  let twoCoinPhase = model.twoCoinPhase;
  if(model.method === 'yarrow-two-coins' && twoCoinPhase === 'first'){

    if(coins[r][0] && coins[r][1]){
      coins[r][0] = coins[r][0] + coins[r][1];
      coins[r][1] = 0;

      c = 0;

      if(coins[r][c] === 4) {
        coins[r][c] = 2;
        twoCoinPhase = 'second';
      } else if (coins[r][c] === 5 || coins[r][c] === 6){
        coins[r][c] = 3;
        twoCoinPhase = 'second';
      }
    }
  }

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
    twoCoinPhase = 'first';
  }

  return ({...model, coins, lines, currentSelection, twoCoinPhase});
}
