import React from "react";
import ReactDOM from "react-dom";

import { LINE_NUMBERS } from './line-numbers.jsx';
import { StalkBundles } from './stalk-bundles.jsx';

const HEADS_VALUE = 3;
const TAILS_VALUE = 2;

export const Coin = ({method, side, cell, onChoice}) => {

  const headsValue = method === 'yarrow-two-coins' ? TAILS_VALUE : HEADS_VALUE;
  const tailsValue = method === 'yarrow-two-coins' ? HEADS_VALUE : TAILS_VALUE;
  const value = (side === 'heads' && headsValue) || (side === 'tails' && tailsValue);
  const isSelected = cell === value;

  let coinClassName = 'h3 w3 br4 ma2 flex flex-column tc justify-center shadow-3';

  if (isSelected) coinClassName += ' bw2 b--solid b--yellow '
  coinClassName += side === 'heads' ? ' bg-heads ' : ' bg-tails ';

  return (
    <div 
      className={coinClassName}
      onClick={() => onChoice(side)} >
      {side}
    </div>
  )
}

export const CoinSelection = ({...domProps}) => (
  <div className='ph2 pointer white tc flex flex-row sans-serif'>
    <Coin {...domProps} side="heads"/>
    <Coin {...domProps} side="tails"/>
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
          {model.method === 'yarrow-stalk' ?
            <StalkBundles 
              onChoice={(coinIndex, side) => dispatch(actions.chooseCoinSides(r, coinIndex, side))}
            bundles={row} />
            :
              row.map((cell, c) => (
                <CoinSelection
                  key={'coin-selection-'+c}
                  method={model.method}
                  onChoice={side => dispatch(actions.chooseCoinSides(r, c, side))}
                  cell={cell}
                />
              ))
          }
      </div>
      </div>
    ))}
    </div>
              )
