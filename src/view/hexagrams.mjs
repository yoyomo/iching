import { div, span } from "muvjs/muv-dom";
import { LINE_NUMBERS } from "./line_numbers.mjs";
import { NUMBER_OF_LINES, trigrams, hexagramLookUp, hexagrams } from '../model/model.mjs';

export const OpenLine = props => children => div({class: 'h1 flex flex-row'})([
  , span({class: 'h-100 bb w-40'})()
  , span({class: 'h-100 w-20'})()
  , span({class: 'h-100 bb w-40'})()
]);
export const ClosedLine = props => children => div({class: 'bb h1'})();
export const GrayedLine = props => children => div({ class: 'o-20 bb h1' })();
export const ChangingArrow = props => children => div()(props.index + '→');
export const NonChangingArrow = props => children => div({ class: 'o-0' })(props.index + '→');

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
  if(!props.hexagram) return div()();
  return div({class: 'f1 sans-serif tc'})([
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
    , HumanReadableChangingLines({changedLines: props.changedLines})()
  ])
}
export const Elements = props => children => {

  return div({class: `tc flex flex-column ${props.isFirst ? 'pr2' : 'pl2'}  pt1`})([
    , div({class: 'pb2'})([
      , div({class: 'o-0'})('____')
      , div({class: `${props.upperTrigram ? '' : 'o-0'}`})(props.upperTrigram ? props.upperTrigram.element : '___')
      , div({class: 'o-0'})('____')
    ])
    , div({class: 'pb2'})([
      , div({class: 'o-0'})('____')
      , div({class: `${props.lowerTrigram ? '' : 'o-0'}`})(props.lowerTrigram ? props.lowerTrigram.element : '___')
      , div({class: 'o-0'})('____')
    ])
  ])
}

export const AllLines = props => children => {

  return div({class: 'w3'})([
    , div({class: 'pb2'})(props.upperLines.map(lineValue => Line({lineValue})()))
    , div({class: 'pb2'})(props.lowerLines.map(lineValue => Line({lineValue})()))
  ])
}

export const calculateHexagram = lines => {

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


  return {n, pageNumber, upperLines, upperTrigram, lowerLines, lowerTrigram}
}

export const isReadingComplete = (lines, otherLines) => lines.filter(l=>l).length === NUMBER_OF_LINES && JSON.stringify(lines) !== JSON.stringify(otherLines);

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

export const HumanReadableChangingLines = props => children => {

  if(!props.changedLines) return div()();
  return div({class: 'f6 mv3 sans-serif flex flex-column tc'})(
    props.changedLines.map(changedLine => {
      let lineString = ' line';
      switch(changedLine){
        case 1:
          lineString = 'First' + lineString;
          break;
        case 2:
          lineString = 'Second' + lineString;
          break;
        case 3:
          lineString = 'Third' + lineString;
          break;
        case 4:
          lineString = 'Fourth' + lineString;
          break;
        case 5:
          lineString = 'Fifth' + lineString;
          break;
        case 6:
          lineString = 'Sixth' + lineString;
          break;
      }

      return div({class: 'mt1'})(lineString) 
    })
  )
}

export const FirstHexagram = dispatch => model => {

  const hexagram = calculateHexagram(model.lines);

  const changedLines = model.lines.slice().reverse().map((lineValue, i) => lineValue === 6 || lineValue === 9 ? i + 1 : -1).filter(l=> l>=0 );

  return div({class: 'flex flex-column'})([
    ,div({class: 'flex flex-row tc justify-center'})([
      , Elements({
        isFirst: true
        , upperTrigram: hexagram.upperTrigram
        , lowerTrigram: hexagram.lowerTrigram})()
      , AllLines({
        upperLines: hexagram.upperLines
        , lowerLines: hexagram.lowerLines
      })()
    ])
    , Result({hexagram: hexagrams[hexagram.n-1], number: hexagram.n, pageNumber: hexagram.pageNumber, changedLines})()
  ])
}

export const SecondHexagram = dispatch => model => {

  const changedLines = changeLinesOfHexagram(model.lines);
  const hexagram = calculateHexagram(changedLines);

  return div({class: `flex flex-column ${isReadingComplete(changedLines, model.lines) ? '' : 'o-20'}`})([
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

  const changedLines = changeLinesOfHexagram(model.lines);
  const hexagram = calculateHexagram(changedLines);

  return div({ class: `ph3 ${isReadingComplete(changedLines, model.lines) ? '' : 'o-20'}`})([
    , div({class: 'pb2'})(hexagram.upperLines.map((lineValue, i) => ChangingOrNonChangingLine({lineValue,i})()))
    , div()(hexagram.lowerLines.map((lineValue, i) => ChangingOrNonChangingLine({lineValue, i: i + 3})()))
  ])
}
