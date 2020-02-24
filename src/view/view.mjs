import { div, button } from 'muvjs/muv-dom';
import { AllCoinOptions } from './coin_options.mjs'
import { LineNumbers } from './line_numbers.mjs'
import { FirstHexagram } from './first_hexagram.mjs'
import { SecondHexagram } from './first_hexagram.mjs';

export const view = dispatch => {

  const AllCoinOptionsContent = AllCoinOptions(dispatch);
  const LineNumbersContent = LineNumbers(dispatch);
  const FirstHexagramContent = FirstHexagram(dispatch);
  const SecondHexagramContent = SecondHexagram(dispatch);

  return model =>
    div()(
      [
        , div({ style: 'display: flex; flex-direction: row' })([
          , AllCoinOptionsContent(model)
          , LineNumbersContent(model)
        ]),
        , div({ style: 'display: flex; flex-direction: row' })([
          , FirstHexagramContent(model)
          , // changes to
          , div({style: 'margin: 1rem'})()
          , SecondHexagramContent(model)
        ])
      ]
    )

};
