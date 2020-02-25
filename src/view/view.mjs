import { div, button } from 'muvjs/muv-dom';
import { AllCoinOptions } from './coin_options.mjs'
import { LineNumbers } from './line_numbers.mjs'
import { FirstHexagram, SecondHexagram , ChangingLines} from './hexagrams.mjs'

export const view = dispatch => {

  const AllCoinOptionsContent = AllCoinOptions(dispatch);
  const LineNumbersContent = LineNumbers(dispatch);
  const FirstHexagramContent = FirstHexagram(dispatch);
  const SecondHexagramContent = SecondHexagram(dispatch);
  const ChangingLinesContent = ChangingLines(dispatch);

  return model =>
    div()(
      [
        , div({ style: 'display: flex; flex-direction: row' })([
          , AllCoinOptionsContent(model)
          , LineNumbersContent(model)
        ]),
        , div({ style: 'display: flex; flex-direction: row' })([
          , FirstHexagramContent(model)
          , ChangingLinesContent(model)
          , SecondHexagramContent(model)
        ])
      ]
    )

};
