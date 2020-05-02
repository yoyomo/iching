import React from "react";
import ReactDOM from "react-dom";

export const LINE_NUMBERS = 6;

export const LineNumbers = (dispatch, actions, model) => (
  <div className='flex flex-column'>
    {model.lines.map((lineValue, r) => (
      <div key={'line-number-'+r} className='flex flex-row'>
        <div>
          {LINE_NUMBERS-r}:
        </div>
        <input
          className='db'
          type='number'
          onInput={(e) => dispatch(actions.chooseCoinTotals(r, e.target.valueAsNumber))}
          value={(lineValue || null)}
        />
      </div>
    ))}
  </div>
)
