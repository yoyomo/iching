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

export const Coin = props => {
  
  const isHeads = props.value === HEADS_VALUE;
  const isTails = props.value === TAILS_VALUE;
  const isSelected = props.cell === props.value;

  return children =>
    div({ 
      class: `h3 w3 br4 ma2 flex flex-column tc justify-center
        ${isSelected ? 'bw2 b--solid b--yellow' :''} 
        ${isHeads ? 'bg-heads' : 'bg-tails'}`,
      onclick: () => props.onChoice(props.value) })
  (isHeads ? 'heads': 'tails')
}

export const CoinSelection = props => children =>
  div({ class: 'ma3 pointer white tc flex flex-row sans-serif' })(
    [
      , Coin({...props, value: HEADS_VALUE})()
      , Coin({...props, value: TAILS_VALUE})()
    ]
  );
