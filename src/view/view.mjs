import { div, button, h1, h2, h3, h5, a, span } from 'muvjs/muv-dom';
import { AllCoinOptions } from './coin_options.mjs'
import { LineNumbers } from './line_numbers.mjs'
import { FirstHexagram, SecondHexagram, ChangingLines } from './hexagrams.mjs'
import { chooseCoinSides } from '../update/actions.mjs';
import {CoinSelection} from './coin_options.mjs';

export const view = dispatch => {

  const dispatcher = {
    chooseCoinSides: (r, c, value) => dispatch(chooseCoinSides(r, c, value))
  };

  const AllCoinOptionsContent = AllCoinOptions(dispatch);
  const LineNumbersContent = LineNumbers(dispatch);
  const FirstHexagramContent = FirstHexagram(dispatch);
  const SecondHexagramContent = SecondHexagram(dispatch);
  const ChangingLinesContent = ChangingLines(dispatch);

  return model =>
    div()(
      [
        , div({class: 'w-100 ma3 tc tracked sans-serif'})([
          , h1({class: 'f1'})('I-CHING')
          , h2()('The Book of Changes')
          , div({class: 'serif f5 o-70'})([
            , div()('Iching only requires you to roll 3 coins, 6 times.')
            , div()([
              , span()('And have an ')
              , a({href: '#'})('Iching book')
              , span()(' ready.')
            ])
          ])
        ])
        , div({ class: 'flex flex-row ma3 w-100 justify-center'})([
          , FirstHexagramContent(model)
          , ChangingLinesContent(model)
          , SecondHexagramContent(model)
        ])
        , div()([
          , div()('Throw coins')
          , div({class: 'flex flex-row'})([
            , CoinSelection({
              onChoice: (value) => dispatcher.chooseCoinSides(r, c, value)
            }
            )()
            , CoinSelection({
              onChoice: (value) => dispatcher.chooseCoinSides(r, c, value)
            }
            )()
            , CoinSelection({
              onChoice: (value) => dispatcher.chooseCoinSides(r, c, value)
            }
            )()
          ])
        ])
        , div()([
          , div()('Edit coins')
          , div({ class: 'flex flex-row'})([
            , AllCoinOptionsContent(model)
            , LineNumbersContent(model)
          ])
        ])
      ]
    )

};
