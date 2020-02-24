import { div, input } from "muvjs/muv-dom";
import { chooseCoinTotals } from "../update/actions.mjs";

export const LineNumbers = dispatch => {
  const dispatcher = {
    changeLines: (r, value) => dispatch(chooseCoinTotals(r, value))
  };

  return model =>
    div({ style: 'flex-direction: row' })(
      model.lines.map((lineValue, r) =>
        input({
          style: 'display: block'
          , type: 'number'
          , oninput: (e) => dispatcher.changeLines(r, e.target.valueAsNumber)
          , value: (lineValue || null)
        })())
    )
}
