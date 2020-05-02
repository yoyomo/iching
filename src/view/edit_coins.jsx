import React from "react";
import ReactDOM from "react-dom";

import { AllCoinOptions } from './coin_options.jsx';
import { LineNumbers } from './line_numbers.jsx';

export const ToolButton = ({right, left, onClick, danger, text}) => (
  <div className={`pa2 ${right? 'fr' : left ? 'fl' : ''} dib`} onClick={onClick}>
    <div className={`${danger ? 'bg-red white' : 'bg-tool-button'} pa2 br2 pointer`}>
      {text}
    </div>
  </div>
)

export const EditCoins = (dispatch, actions, model) => (
  <div className='h-100 flex flex-column'>
    <div>
      <ToolButton left={true} onClick={() => dispatch(actions.toggle('isEditingCoins'))} text='Edit coins'/>
      <ToolButton right={true} onClick={() => dispatch(actions.toggle('isShowingRules'))} text='Rules'/>
    </div>
    {model.toggles.isEditingCoins ?
      <div>
        <div className='flex flex-row flex-wrap'>
          {AllCoinOptions(dispatch, actions, model)}
          {LineNumbers(dispatch, actions, model)}
        </div>
        <ToolButton danger={true} onClick={() => dispatch(actions.reset())} text='Reset' />
      </div>
      : null
    }
  </div>
)
