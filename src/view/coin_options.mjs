import { chooseCoinSides } from '../update/actions.mjs';
import { div, button } from 'muvjs/muv-dom';

export const AllCoinOptions = dispatch => {
  const dispatcher = {
    chooseCoinSides: (r, c, value) => dispatch(chooseCoinSides(r, c, value))
  };

  return model =>
    div({ style: `display: flex; flex-direction: column` })
      (model.coins.map((row, r) =>
        div({ style: `display: flex; flex-direction: row` })
          (row.map((cell, c) =>
            CoinSelection({
              onChoice: (value) => dispatcher.chooseCoinSides(r, c, value)
              , cell: cell
            })()
          ))
      ))
}

const HEADS_VALUE = 3;
const TAILS_VALUE = 2;

export const CoinSelection = props => children =>
  div({ style: "margin: 1rem;" })(
    [
      , button({ onclick: () => props.onChoice(HEADS_VALUE) })('heads')
      , button({ onclick: () => props.onChoice(TAILS_VALUE) })('tails')
      , div()(props.cell)
    ]
  );