import React from "react";
import ReactDOM from "react-dom";

import {Tokens} from './tokens.jsx';

export const LINE_NUMBERS = 6;

export const LineNumbers = (dispatch, actions, model) => (
  <div className='flex flex-column'>
    {model.lines.map((lineValue, r) => (
      <div key={'line-number-'+r} 
        className='flex flex-row bb bt b--light-gray'>
        <div>
          {LINE_NUMBERS-r}:
        </div>
        <Tokens 
          showProbability={false}
          method={model.method}
          selectedValue={model.lines[r]}
          onChoice={(lineValue) => dispatch(actions.chooseLineTotals(r, lineValue))} />
      </div>
    ))}
  </div>
)
