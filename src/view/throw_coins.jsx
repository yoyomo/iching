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
          method={model.method}
          onChoice={value => dispatch(actions.chooseCurrentRowCoinSide(i, value))}
          cell={model.currentSelection.r >= 0 && model.coins[model.currentSelection.r][i]}
        />
      ))
    )}
    {model.method === 'yarrow-sixteen-tokens' && (
      <Tokens 
        showProbability={true}
        method={model.method}
        selectedValue={model.lines[model.currentSelection.r]}
        onChoice={(lineValue) => dispatch(actions.chooseCurrentLineTotal(lineValue))} />
    )}
    {model.method === 'yarrow-two-coins' && (
      times(2).map( i => {
        const coinIndex = i + (model.twoCoinPhase === 'second' ? 1 : 0)
        return (
        <CoinSelection
          key={'throw-coins-'+coinIndex}
          method={model.method}
          onChoice={value => dispatch(actions.chooseCurrentRowCoinSide(coinIndex, value))}
          cell={model.currentSelection.r >= 0 && model.coins[model.currentSelection.r][coinIndex]}
        />
        )
      })
    )}
  </div>
)
