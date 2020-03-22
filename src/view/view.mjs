import { div, button, h1, h2, h3, h5, a, span, i } from 'muvjs/muv-dom';
import { AllCoinOptions } from './coin_options.mjs'
import { LineNumbers } from './line_numbers.mjs'
import { FirstHexagram, SecondHexagram, ChangingLines } from './hexagrams.mjs'
import { ThrowCoins } from './throw_coins.mjs';

export const view = dispatch => {

  const AllCoinOptionsContent = AllCoinOptions(dispatch);
  const LineNumbersContent = LineNumbers(dispatch);
  const FirstHexagramContent = FirstHexagram(dispatch);
  const SecondHexagramContent = SecondHexagram(dispatch);
  const ChangingLinesContent = ChangingLines(dispatch);
  const ThrowCoinsContent = ThrowCoins(dispatch);

  return model =>
    div()(
      [
        , i({src: 'img/circle_i_ching.png', class: 'absolute w1 h1 o-70'})()
        , div({class: 'vh-100 db'})([
          , div({class: 'w-100 ma3 tc tracked sans-serif'})([
            , h1({class: 'f1'})('I-CHING')
            , h2()('The Book of Changes')
            , div({class: 'serif f5 o-70'})([
              , div()('Iching only requires you to roll 3 coins, 6 times.')
              , div()([
                , span()('And have an ')
                , a({href: 'https://www.amazon.com/dp/1250209056/ref=cm_sw_em_r_mt_dp_U_0EUDEbR4Q423X', alt: '978-1250209054', target: '_blank'})('Iching book')
                , span()(' ready.')
              ])
            ])
          ])
          , div({ class: 'flex flex-row ma3 w-100 justify-center'})([
            , FirstHexagramContent(model)
            , ChangingLinesContent(model)
            , SecondHexagramContent(model)
          ])
          , div({class: 'flex flex-column ma3'})([
            , div({class: 'serif f5 o-70 tc'})('Throw physical coins. Then click; or press h or 3 for heads, and t or 2 for tails')
            , ThrowCoinsContent(model)
          ])
        ])
        , div({class: 'db'})([
          , div()('Edit coins')
          , div({ class: 'flex flex-row'})([
            , AllCoinOptionsContent(model)
            , LineNumbersContent(model)
          ])
        ])
      ]
    )

};
