import { div } from "muvjs/muv-dom";

export const OpenLine = props => children => "＿＿＿　＿＿＿";
export const ClosedLine = props => children => "＿＿＿＿＿＿＿";

export const FirstHexagram = dispatch => model => 
div()(
  model.lines.map(lineValue => 
    div()(lineValue % 2 === 0 ? OpenLine()() : ClosedLine()())
    )
)

export const SecondHexagram = dispatch => model => 
div()(
  model.lines.map(lineValue => 
    div()((lineValue % 2 === 0 || lineValue === 9)
    && (lineValue % 2 === 0 || lineValue === 6) ? OpenLine()() : ClosedLine()())
    )
)