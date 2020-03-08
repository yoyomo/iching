import { chooseCoinSides } from '../update/actions.mjs';
import { div, button } from 'muvjs/muv-dom';
import { LINE_NUMBERS } from './line_numbers.mjs';

export const AllCoinOptions = dispatch => {
  const dispatcher = {
    chooseCoinSides: (r, c, value) => dispatch(chooseCoinSides(r, c, value))
  };

  return model =>
    div({ class: 'flex flex-column' })
      (model.coins.map((row, r) =>
        div({ class: 'flex flex-row' })(
          [div({ class: 'ma3' })(`${LINE_NUMBERS - r}:`)].concat(row.map((cell, c) =>
            CoinSelection({
              onChoice: (value) => dispatcher.chooseCoinSides(r, c, value)
              , cell: cell
            }
            )()
          ))
        )
      ))
}

const HEADS_VALUE = 3;
const TAILS_VALUE = 2;

export const CoinSelection = props => children =>
  div({ class: 'ma3' })(
    [
      , button({ onclick: () => props.onChoice(HEADS_VALUE) })('heads')
      , button({ onclick: () => props.onChoice(TAILS_VALUE) })('tails')
      , div()(props.cell)
    ]
  );