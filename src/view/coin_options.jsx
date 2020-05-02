import React from "react";
import ReactDOM from "react-dom";

import { LINE_NUMBERS } from './line_numbers.jsx';

const HEADS_VALUE = 3;
const TAILS_VALUE = 2;

export const Coin = ({value, cell, onChoice}) => {

  const isHeads = value === HEADS_VALUE;
  const isTails = value === TAILS_VALUE;
  const isSelected = cell === value;

  let coinClassName = 'h3 w3 br4 ma2 flex flex-column tc justify-center shadow-3';

  if (isSelected) coinClassName += ' bw2 b--solid b--yellow '
  coinClassName += isHeads ? ' bg-heads ' : ' bg-tails ';

  return (
    <div 
      className={coinClassName}
      onClick={() => onChoice(value)} >
      {isHeads ? 'heads': 'tails'}
    </div>
  )
}

export const CoinSelection = ({...domProps}) => (
  <div className='ph2 pointer white tc flex flex-row sans-serif'>
    <Coin {...domProps} value={HEADS_VALUE}/>
    <Coin {...domProps} value={TAILS_VALUE}/>
  </div>
);


export const AllCoinOptions = (dispatch, actions, model) => (
  <div className='flex flex-column'>
    {model.coins.map((row, r) => (
      <div key={'coin-options-'+r} className='flex flex-column bb bt b--light-gray pv2'>
        <div className='ma3'>
          {LINE_NUMBERS - r}:
        </div>
        <div className='flex flex-row flex-wrap tc justify-center'>
          {row.map((cell, c) => (
            <CoinSelection
              key={'coin-selection-'+c}
              onChoice={(value) => dispatch(actions.chooseCoinSides(r, c, value))}
              cell={cell}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
)
