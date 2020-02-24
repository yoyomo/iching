import { div } from "muvjs/muv-dom";

export const FirstHexagram = dispatch => model => 
div()(
  model.lines.map(lineValue => 
    div()(lineValue % 2 === 0 ? "＿＿＿　＿＿＿" : "＿＿＿＿＿＿＿")
    )
)

export const SecondHexagram = dispatch => model => 
div()(
  model.lines.map(lineValue => 
    div()((lineValue % 2 === 0 && lineValue !== 6)
    || (lineValue % 2 === 1 || lineValue !== 9) ? "＿＿＿　＿＿＿" : "＿＿＿＿＿＿＿")
    )
)