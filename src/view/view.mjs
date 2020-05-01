import { div, button, h1, h2, h3, h5, a, span, img } from 'muvjs/muv-dom';
import { AllCoinOptions } from './coin_options.mjs'
import { LineNumbers } from './line_numbers.mjs'
import { FirstHexagram, SecondHexagram, ChangingLines, isReadingComplete } from './hexagrams.mjs'
import { ThrowCoins } from './throw_coins.mjs';
import { EditCoins } from './edit_coins.mjs';
import {Sidebar} from './sidebar.mjs';

export const view = dispatch => {

  const AllCoinOptionsContent = AllCoinOptions(dispatch);
  const LineNumbersContent = LineNumbers(dispatch);
  const FirstHexagramContent = FirstHexagram(dispatch);
  const SecondHexagramContent = SecondHexagram(dispatch);
  const ChangingLinesContent = ChangingLines(dispatch);
  const ThrowCoinsContent = ThrowCoins(dispatch);
  const EditCoinsContent = EditCoins(dispatch);
  const SidebarContent = Sidebar(dispatch);

  return model =>
    div()(
      [
        , SidebarContent(model)
        , div({class: 'min-vh-100 db'})([
          , div({class: 'w-100 tc tracked sans-serif'})([
            , div({class: 'f1 b pt4 pb3'})('I-CHING')
            , div({class: 'f3 b pb4'})('The Book of Changes')
            , model.toggles.isShowingRules ? div({class: 'serif f5 o-70'})([
              , div()('Iching only requires you to roll 3 coins, 6 times.')
              , div()([
                , span()('And have an ')
                , a({href: 'https://www.amazon.com/dp/1250209056/ref=cm_sw_em_r_mt_dp_U_0EUDEbR4Q423X', alt: '978-1250209054', target: '_blank'})('Iching book')
                , span()(' ready.')
              ])
            ])
            : null
          ])
          , div({ class: 'flex flex-row w-100 justify-center pt1'})([
            , FirstHexagramContent(model)
            , ChangingLinesContent(model)
            , SecondHexagramContent(model)
          ])
          , !isReadingComplete(model.lines) ? div({class: 'flex flex-column'})([
            , ThrowCoinsContent(model)
            , model.toggles.isShowingRules ? div({class: 'serif f5 o-70 tc'})([
              , div()('Throw physical coins. Then click according to (h)eads and (t)ails,')
              , div({class: '0-90 f6'})('type h or 3 for heads, and t or 2 for tails or,')
              , div({class: 'o-90 f6'})('type 6, 7, 8, or 9 for each line')
            ])
            : null
          ])
          : null
        ])
        , EditCoinsContent(model)
      ])

};
