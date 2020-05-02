import React from "react";
import ReactDOM from "react-dom";

import { CoinSelection } from './coin_options.jsx';
import {Tokens} from './tokens.jsx';
import { times } from '../utils/arrays.mjs';

export const ThrowCoins = (dispatch, actions, model) => (
  <div className='flex flex-row justify-center flex-wrap'>
    {model.method === 'three-coins' && (
      times(3).map( i => (
        <CoinSelection
          key={'throw-coins-'+i}
          onChoice={value => dispatch(actions.chooseCurrentRowCoinSide(i, value))}
          cell={model.currentSelection.r >= 0 && model.coins[model.currentSelection.r][i]}
        />
      ))
    )}
    {model.method === 'yarrow-sixteen-tokens' && (
      <Tokens 
        showProbability={true}
        selectedValue={model.lines[model.currentSelection.r]}
        onChoice={(lineValue) => dispatch(actions.chooseCurrentCoinTotal(lineValue))} />
    )}
  </div>
)
