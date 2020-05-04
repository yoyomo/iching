import React from "react";
import ReactDOM from "react-dom";

import { AllCoinOptions } from './coin-options.jsx';
import { LineNumbers } from './line-numbers.jsx';

export const ToolButton = ({right, left, onClick, danger, text, isSelected}) => (
  <div className={`pa2 ${right? 'fr' : left ? 'fl' : ''} dib`} onClick={onClick}>
    <div className={`${danger ? 'bg-red white' : 'bg-tool-button'} ${isSelected ? 'inverted-shadow-1' : 'shadow-4'} pa2 br2 pointer`}>
      {text}
    </div>
  </div>
)

export const EditCoins = (dispatch, actions, model) => (
  <div className='flex flex-column'>
    <div>
      <ToolButton left={true} onClick={() => dispatch(actions.toggle('isEditingCoins'))} text='Edit coins' isSelected={model.toggles.isEditingCoins}/>
      <ToolButton right={true} onClick={() => dispatch(actions.toggle('isShowingRules'))} text='Rules' isSelected={model.toggles.isShowingRules}/>
    </div>
    {model.toggles.isEditingCoins && (
      <div>
        <div className='flex flex-row flex-wrap'>
          {model.method !== 'yarrow-sixteen-tokens' && AllCoinOptions(dispatch, actions, model)}
          {LineNumbers(dispatch, actions, model)}
        </div>
        <ToolButton danger={true} onClick={() => dispatch(actions.reset())} text='Reset' />
      </div>
    )}
  </div>
)
