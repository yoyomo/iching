import { div, button } from 'muvjs/muv-dom';
import { AllCoinOptions } from './coin_options.mjs';
import { LineNumbers } from './line_numbers.mjs';
import {toggleEditingCoins } from '../update/actions.mjs';

export const EditCoins = dispatch => {

  const dispatcher = {
    toggleEditingCoins: () => dispatch(toggleEditingCoins())
  };
  const AllCoinOptionsContent = AllCoinOptions(dispatch);
  const LineNumbersContent = LineNumbers(dispatch);

  return model => div({class: 'h-100 flex flex-column'})([
    , div()(
        div({class: 'pa2 fl db', onclick: dispatcher.toggleEditingCoins })(
          div({class: 'bg-tool-button pa2 br2 pointer'})('Edit coins')
        )
    )
    , model.isEditingCoins ?
      div({ class: 'flex flex-row flex-wrap'})([
        , AllCoinOptionsContent(model)
        , LineNumbersContent(model)
      ])
    : null
  ])
}
