import { div } from "muvjs/muv-dom";

export const OpenLine = props => children => div()("＿＿＿　＿＿＿");
export const ClosedLine = props => children => div()("＿＿＿＿＿＿＿");
export const GrayedLine = props => children => div({ style: 'opacity: 25%;' })("＿＿＿＿＿＿＿");

export const FirstHexagram = dispatch => model =>
  div()(
    model.lines.map(lineValue =>
      div()(
        function () {
          if (lineValue === 0) {
            return GrayedLine()();
          } else if (lineValue % 2 === 0) {
            return OpenLine()()
          } else {
            return ClosedLine()()
          }
        }()
      )
    )
  )

export const SecondHexagram = dispatch => model =>
  div()(
    model.lines.map(lineValue =>
      div()(function () {
        if (lineValue === 9 || lineValue === 8) {
          return OpenLine()()
        }
        else if (lineValue === 6 || lineValue === 7) {
          return ClosedLine()()
        } else {
          return GrayedLine()()
        }
      }()
      )
    )
  )