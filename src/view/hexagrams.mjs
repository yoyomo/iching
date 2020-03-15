import { div, span } from "muvjs/muv-dom";
import { LINE_NUMBERS } from "./line_numbers.mjs";
import { NUMBER_OF_LINES, trigrams, hexagramLookUp } from '../model/model.mjs';

export const OpenLine = props => children => div()("＿＿＿　＿＿＿");
export const ClosedLine = props => children => div()("＿＿＿＿＿＿＿");
export const GrayedLine = props => children => div({ class: 'o-20' })("＿＿＿＿＿＿＿");
export const ChangingArrow = props => children => div()(props.index + 'ー＞');
export const NonChangingArrow = props => children => div({ class: 'o-0' })(props.index + 'ー＞');

const Line = props => children => {
  if (props.lineValue === 0) {
    return GrayedLine()();
  } else if (props.lineValue % 2 === 0) {
    return OpenLine()()
  } else {
    return ClosedLine()()
  }
}

export const FirstHexagram = dispatch => model => {

  const lowerLines = model.lines.slice(3,6);
  const lowerLinesSymbol = lowerLines.filter(l=>l).map(l => l % 2).join('');
  let lowerTrigramIndex = -1;
  let lowerTrigram
  
  for(let i = 0; i < trigrams.length; i++){
    const trigram = trigrams[i];
    if(trigram.symbol.join('') === lowerLinesSymbol){
      lowerTrigram = trigram;
      lowerTrigramIndex = i;
    }
  };

  const upperLines = model.lines.slice(0,3);
  const upperLinesSymbol = upperLines.filter(l=>l).map(l => l % 2).join('');
  let upperTrigramIndex = -1;
  let upperTrigram
  
  for(let i = 0; i < trigrams.length; i++){
    const trigram = trigrams[i];
    if(trigram.symbol.join('') === upperLinesSymbol){
      upperTrigram = trigram;
      upperTrigramIndex = i;
    }
  };


  const n = hexagramLookUp[lowerTrigramIndex] && hexagramLookUp[lowerTrigramIndex][upperTrigramIndex];
  const pageNumber = n * 2 + 3;

  return div({class: 'flex flex-row'})([
    , div({class: 'tc justify-center flex flex-column mr2 mt1'})([
      , div({class: 'mb2'})([
        , div({class: 'o-0'})('____')
        , div({class: `${upperTrigram ? '' : 'o-0'}`})(upperTrigram ? upperTrigram.element : '___')
        , div({class: 'o-0'})('____')
      ])
      , div({class: 'mb2'})([
        , div({class: 'o-0'})('____')
        , div({class: `${lowerTrigram ? '' : 'o-0'}`})(lowerTrigram ? lowerTrigram.element : '___')
        , div({class: 'o-0'})('____')
      ])
      , div({class: 'o-0'})('___')
    ])
    , div()([
      , div({class: 'mb2'})(upperLines.map(lineValue => Line({lineValue})()))
      , div({class: 'mb2'})(lowerLines.map(lineValue => Line({lineValue})()))
      , div({class: 'flex flex-row tc justify-center'})([
        , div({class: 'mr2'})(n ? `#${n}` : '')
        , div({class: 'o-70'})(pageNumber ? `p.(${pageNumber})` : '')
      ])
    ])
  ])
}

export const SecondHexagram = dispatch => model => {

  const changedLines = model.lines.map(line => {
    if(line === 6){
      line = 9;
    } else if(line === 9) {
      line = 6;
    }
    return line;
  })

  const lowerLines = changedLines.slice(3,6);
  const lowerLinesSymbol = lowerLines.filter(l=>l).map(l => l % 2).join('');
  let lowerTrigramIndex = -1;
  let lowerTrigram
  
  for(let i = 0; i < trigrams.length; i++){
    const trigram = trigrams[i];
    if(trigram.symbol.join('') === lowerLinesSymbol){
      lowerTrigram = trigram;
      lowerTrigramIndex = i;
    }
  };

  const upperLines = changedLines.slice(0,3);
  const upperLinesSymbol = upperLines.filter(l=>l).map(l => l % 2).join('');
  let upperTrigramIndex = -1;
  let upperTrigram
  
  for(let i = 0; i < trigrams.length; i++){
    const trigram = trigrams[i];
    if(trigram.symbol.join('') === upperLinesSymbol){
      upperTrigram = trigram;
      upperTrigramIndex = i;
    }
  };


  const n = hexagramLookUp[lowerTrigramIndex] && hexagramLookUp[lowerTrigramIndex][upperTrigramIndex];
  const pageNumber = n * 2 + 3;

  const isReadingComplete = model.lines.filter(l=>l).length === NUMBER_OF_LINES;

  return div({class: `flex flex-row ${isReadingComplete ? '' : 'o-20'}`})([
    , div()([
      , div({class: 'mb2'})(upperLines.map(lineValue => Line({lineValue})()))
      , div({class: 'mb2'})(lowerLines.map(lineValue => Line({lineValue})()))
      , div({class: 'flex flex-row tc justify-center'})([
        , div({class: 'mr2'})(n ? `#${n}` : '')
        , div({class: 'o-70'})(pageNumber ? `p.(${pageNumber})` : '')
      ])
    ])
    , div({class: 'tc justify-center flex flex-column ml2 mt1'})([
      , div({class: 'mb2'})([
        , div({class: 'o-0'})('____')
        , div({class: `${upperTrigram ? '' : 'o-0'}`})(upperTrigram ? upperTrigram.element : '___')
        , div({class: 'o-0'})('____')
      ])
      , div()([
        , div({class: 'o-0'})('____')
        , div({class: `${lowerTrigram ? '' : 'o-0'}`})(lowerTrigram ? lowerTrigram.element : '___')
        , div({class: 'o-0'})('____')
      ])
      , div({class: 'o-0'})('___')
    ])
  ])
}

export const ChangingOrNonChangingLine = props => children => {
  const index = LINE_NUMBERS - props.i;
  if (props.lineValue === 6 || props.lineValue === 9) {
    return ChangingArrow({index})()
  } else {
    return NonChangingArrow({index})()
  }
}

export const ChangingLines = dispatch => model => {
  
  const lowerLines = model.lines.slice(3,6);
  const upperLines = model.lines.slice(0,3);
 
  const isReadingComplete = model.lines.filter(l=>l).length === NUMBER_OF_LINES;

  return div({ class: `ml3 mr3 mt1 ${isReadingComplete ? '' : 'o-20'}`})([
    , div({class: 'mb2'})(upperLines.map((lineValue, i) => ChangingOrNonChangingLine({lineValue,i})()))
    , div()(lowerLines.map((lineValue, i) => ChangingOrNonChangingLine({lineValue, i: i + 3})()))
  ])
}
