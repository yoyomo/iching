import { div, input } from "muvjs/muv-dom";
import { chooseCoinTotals } from "../update/actions.mjs";

export const LINE_NUMBERS = 6;

export const LineNumbers = dispatch => {
  const dispatcher = {
    changeLines: (r, value) => dispatch(chooseCoinTotals(r, value))
  };

  return model =>
    div({ style: 'display: flex; flex-direction: column' })(
      model.lines.map((lineValue, r) =>
        div({style: 'display: flex; flex-direction: row'})([
          , div()(`${LINE_NUMBERS-r}:`)
          , input({
            style: 'display: block'
            , type: 'number'
            , oninput: (e) => dispatcher.changeLines(r, e.target.valueAsNumber)
            , value: (lineValue || null)
          })()
        ])
      )
    )
}
