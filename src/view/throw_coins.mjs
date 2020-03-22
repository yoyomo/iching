import { div } from 'muvjs/muv-dom';
import { chooseCurrentRowCoinSide } from '../update/actions.mjs';
import { CoinSelection } from './coin_options.mjs';
import { times } from '../utils/arrays.mjs';

export const ThrowCoins = dispatch => {

  const dispatcher = {
    chooseCurrentRowCoinSide: (c,value) => dispatch(chooseCurrentRowCoinSide(c,value))
  };

  return model =>
    div({class: 'flex flex-row justify-center flex-wrap'})(
      times(3).map( i =>
        CoinSelection({
          onChoice: value => dispatcher.chooseCurrentRowCoinSide(i, value)
          , cell: model.currentSelection.r >= 0 && model.coins[model.currentSelection.r][i]
        })()
      )
    )
}
