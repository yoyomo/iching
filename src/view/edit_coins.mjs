import { div, button } from 'muvjs/muv-dom';
import { AllCoinOptions } from './coin_options.mjs';
import { LineNumbers } from './line_numbers.mjs';
import {toggle } from '../update/actions.mjs';

export const ToolButton = props => children =>
  div({class: `pa2 ${props.right? 'fr' : props.left ? 'fl' : ''} db`, onclick: props.onclick })(
    div({class: 'bg-tool-button pa2 br2 pointer'})(props.text)
  )

export const EditCoins = dispatch => {

  const dispatcher = {
    toggleEditingCoins: () => dispatch(toggle('isEditingCoins'))
  , toggleShowingRules: () => dispatch(toggle('isShowingRules'))
  };
  const AllCoinOptionsContent = AllCoinOptions(dispatch);
  const LineNumbersContent = LineNumbers(dispatch);

  return model => div({class: 'h-100 flex flex-column'})([
    , div()([
      , ToolButton({left: true, onclick: dispatcher.toggleEditingCoins, text: 'Edit coins'})()
      , ToolButton({right: true, onclick: dispatcher.toggleShowingRules, text: 'Rules'})()
    ])
    , model.isEditingCoins ?
    div({ class: 'flex flex-row flex-wrap'})([
      , AllCoinOptionsContent(model)
      , LineNumbersContent(model)
    ])
    : null
  ])
}
