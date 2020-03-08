const HEADS_VALUE = 3;
const TAILS_VALUE = 2;

export const update = model => action => {
  let effects = [];
  switch (action.type) {
    case "choose-coin-sides":
      model = { ...model };
      model.coins = model.coins.slice();
      model.coins[action.r] = model.coins[action.r].slice();
      model.coins[action.r][action.c] = action.value;

      if(model.coins[action.r].filter(side => !!side).length === 3){
        model.lines = model.lines.slice();
        model.lines[action.r] = model.coins[action.r].reduce((a, b) => {
          return a + b
        }, 0);
      }

      break;

    case "choose-coin-totals":
      model = {...model};
      model.lines = model.lines.slice();
      model.lines[action.r] = action.value;

      break;

  }
  return { model, effects };
};
