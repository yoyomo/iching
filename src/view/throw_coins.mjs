import { div } from 'muvjs/muv-dom';
import { chooseCoinSides } from '../update/actions.mjs';
import { CoinSelection } from './coin_options.mjs';

export const ThrowCoins = dispatch => {

  const dispatcher = {
    chooseCoinSides: (r,c,value) => dispatch(chooseCoinSides(r,c,value))
  };

  return model =>
  div({class: 'flex flex-row justify-center'})([
    , CoinSelection({
        onChoice: value => dispatcher.chooseCoinSides(model.currentSelection.r, 0, value)
      , cell: model.coins[model.currentSelection.r][0]
    })()
    , CoinSelection({
        onChoice: value => dispatcher.chooseCoinSides(model.currentSelection.r, 1, value)
      , cell: model.coins[model.currentSelection.r][1]
    })()
    , CoinSelection({
        onChoice: value => dispatcher.chooseCoinSides(model.currentSelection.r, 2, value)
      , cell: model.coins[model.currentSelection.r][2]
    })()
  ])
}
