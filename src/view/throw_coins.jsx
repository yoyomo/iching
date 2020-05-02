import React from "react";
import ReactDOM from "react-dom";

import { CoinSelection } from './coin_options.jsx';
import { times } from '../utils/arrays.mjs';

export const ThrowCoins = (dispatch, actions, model) => (
  <div className='flex flex-row justify-center flex-wrap'>
    {times(3).map( i => (
      <CoinSelection
        key={'throw-coins-'+i}
        onChoice={value => dispatch(actions.chooseCurrentRowCoinSide(i, value))}
        cell={model.currentSelection.r >= 0 && model.coins[model.currentSelection.r][i]}
      />
    ))}
  </div>
)
