import { div, span } from "muvjs/muv-dom";
import { LINE_NUMBERS } from "./line_numbers.mjs";
import { NUMBER_OF_LINES, trigrams, hexagramLookUp, hexagrams } from '../model/model.mjs';

export const OpenLine = props => children => div()("＿＿＿　＿＿＿");
export const ClosedLine = props => children => div()("＿＿＿＿＿＿＿");
export const GrayedLine = props => children => div({ class: 'o-20' })("＿＿＿＿＿＿＿");
export const ChangingArrow = props => children => div()(props.index + 'ー＞');
export const NonChangingArrow = props => children => div({ class: 'o-0' })(props.index + 'ー＞');

export const Line = props => children => {
  if (props.lineValue === 0) {
    return GrayedLine()();
  } else if (props.lineValue % 2 === 0) {
    return OpenLine()()
  } else {
    return ClosedLine()()
  }
}
export const Result = props => children => {

    return props.hexagram && div({class: 'f1 sans-serif tc'})([
      , div()(props.hexagram.glyph)
      , div({class: 'mv3'})(props.hexagram.kanji)
      , div({class: 'f5 b'})([
        , span()(props.hexagram.bookChinese), 
        , span()(' / ')
        , span()(props.hexagram.bookName)
      ])
      , div({class: 'flex flex-row tc justify-center f6 mt2'})([
        , div({class: 'mr2'})(props.number ? `#${props.number}` : '')
        , div({class: 'o-70'})(props.pageNumber ? `p.(${props.pageNumber})` : '')
      ])
    ])
}
export const Elements = props => children => {

  return div({class: 'tc flex flex-column mr2 mt1'})([
    , div({class: 'mb2'})([
      , div({class: 'o-0'})('____')
      , div({class: `${props.upperTrigram ? '' : 'o-0'}`})(props.upperTrigram ? props.upperTrigram.element : '___')
      , div({class: 'o-0'})('____')
    ])
    , div({class: 'mb2'})([
      , div({class: 'o-0'})('____')
      , div({class: `${props.lowerTrigram ? '' : 'o-0'}`})(props.lowerTrigram ? props.lowerTrigram.element : '___')
      , div({class: 'o-0'})('____')
    ])
    , div({class: 'o-0'})('___')
  ])
}

export const AllLines = props => children => {

  return div()([
    , div({class: 'mb2'})(props.upperLines.map(lineValue => Line({lineValue})()))
    , div({class: 'mb2'})(props.lowerLines.map(lineValue => Line({lineValue})()))
  ])
}

export const calculateHexagram = (lines, otherLines) => {

  const lowerLines = lines.slice(3,6);
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

  const upperLines = lines.slice(0,3);
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

  const isReadingComplete = lines.filter(l=>l).length === NUMBER_OF_LINES && JSON.stringify(lines) !== JSON.stringify(otherLines);

  return {isReadingComplete, n, pageNumber, upperLines, upperTrigram, lowerLines, lowerTrigram}
}

export const changeLinesOfHexagram = lines => {

  return lines.map(line => {
    if(line === 6){
      line = 9;
    } else if(line === 9) {
      line = 6;
    }
    return line;
  })
}

export const FirstHexagram = dispatch => model => {

  const hexagram = calculateHexagram(model.lines);

  return div({class: 'flex flex-column'})([
    ,div({class: 'flex flex-row tc justify-center'})([
      , Elements({
          upperTrigram: hexagram.upperTrigram
        , lowerTrigram: hexagram.lowerTrigram})()
      , AllLines({
          upperLines: hexagram.upperLines
        , lowerLines: hexagram.lowerLines
      })()
    ])
    , Result({hexagram: hexagrams[hexagram.n-1], number: hexagram.n, pageNumber: hexagram.pageNumber})()
  ])
}

export const SecondHexagram = dispatch => model => {

  const hexagram = calculateHexagram(changeLinesOfHexagram(model.lines), model.lines);

  return div({class: `flex flex-column ${hexagram.isReadingComplete ? '' : 'o-20'}`})([
    , div({class: 'flex flex-row tc justify-center'})([
      , AllLines({upperLines: hexagram.upperLines, lowerLines: hexagram.lowerLines})()
      , Elements({upperTrigram: hexagram.upperTrigram, lowerTrigram: hexagram.lowerTrigram})()
    ])
    , Result({hexagram: hexagrams[hexagram.n-1], number: hexagram.n, pageNumber: hexagram.pageNumber})()
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

  const hexagram = calculateHexagram(changeLinesOfHexagram(model.lines), model.lines);

  return div({ class: `ml3 mr3 mt1 ${hexagram.isReadingComplete ? '' : 'o-20'}`})([
    , div({class: 'mb2'})(hexagram.upperLines.map((lineValue, i) => ChangingOrNonChangingLine({lineValue,i})()))
    , div()(hexagram.lowerLines.map((lineValue, i) => ChangingOrNonChangingLine({lineValue, i: i + 3})()))
  ])
}
