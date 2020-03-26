import { div, button } from 'muvjs/muv-dom';
import { AllCoinOptions } from './coin_options.mjs';
import { LineNumbers } from './line_numbers.mjs';
import {toggle, reset } from '../update/actions.mjs';

export const ToolButton = props => children =>
  div({class: `pa2 ${props.right? 'fr' : props.left ? 'fl' : ''} dib`, onclick: props.onclick })(
    div({class: `${props.danger ? 'bg-red white' : 'bg-tool-button'} pa2 br2 pointer`})(props.text)
  )

export const EditCoins = dispatch => {

  const dispatcher = {
    toggleEditingCoins: () => dispatch(toggle('isEditingCoins'))
  , toggleShowingRules: () => dispatch(toggle('isShowingRules'))
  , resetApplication: () => dispatch(reset())
  };
  const AllCoinOptionsContent = AllCoinOptions(dispatch);
  const LineNumbersContent = LineNumbers(dispatch);

  return model => div({class: 'h-100 flex flex-column'})([
    , div()([
      , ToolButton({left: true, onclick: dispatcher.toggleEditingCoins, text: 'Edit coins'})()
      , ToolButton({right: true, onclick: dispatcher.toggleShowingRules, text: 'Rules'})()
    ])
    , model.toggles.isEditingCoins ?
    div()([
      , div({ class: 'flex flex-row flex-wrap'})([
        , AllCoinOptionsContent(model)
        , LineNumbersContent(model)
      ])
      , ToolButton({danger: true, onclick: dispatcher.resetApplication, text: 'Reset'})()
    ])
    : null
  ])
}
