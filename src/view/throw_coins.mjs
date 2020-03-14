import { div } from 'muvjs/muv-dom';
import { chooseCurrentRowCoinSide } from '../update/actions.mjs';
import { CoinSelection } from './coin_options.mjs';
import { times } from '../utils/arrays.mjs';

export const ThrowCoins = dispatch => {

  const dispatcher = {
    chooseCurrentRowCoinSide: (c,value) => dispatch(chooseCurrentRowCoinSide(c,value))
  };

  return model =>
    div({class: 'flex flex-row justify-center'})(
      times(3).map( i =>
        CoinSelection({
          onChoice: value => dispatcher.chooseCurrentRowCoinSide(i, value)
          , cell: model.coins[model.currentSelection.r][i]
        })()
      )
    )
}
