import { div, input } from "muvjs/muv-dom";
import { chooseCoinTotals } from "../update/actions.mjs";

export const LINE_NUMBERS = 6;

export const LineNumbers = dispatch => {
  const dispatcher = {
    changeLines: (r, value) => dispatch(chooseCoinTotals(r, value))
  };

  return model =>
    div({ class: 'flex flex-column'})(
      model.lines.map((lineValue, r) =>
        div({class: 'flex flex-row'})([
          , div()(`${LINE_NUMBERS-r}:`)
          , input({
            class: 'db'
            , type: 'number'
            , oninput: (e) => dispatcher.changeLines(r, e.target.valueAsNumber)
            , value: (lineValue || null)
          })()
        ])
      )
    )
}
