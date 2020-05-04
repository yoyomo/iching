import React from "react";
import ReactDOM from "react-dom";

import { LINE_NUMBERS } from "./line-numbers.jsx";
import { NUMBER_OF_LINES, trigrams, hexagramLookUp, hexagrams } from '../model';

export const OpenLine = () => (
  <div className='h1 flex flex-row'>
    <span className='h-100 bb w-40'/>
    <span className='h-100 w-20'/>
    <span className='h-100 bb w-40'/>
  </div>
)

export const ClosedLine = () => (<div className='bb h1'></div>);
export const GrayedLine = () => (<div className='o-20 bb h1'></div>);
export const ChangingArrow = ({index}) => (<div>{index + '→'}</div>);
export const NonChangingArrow = ({index}) => (<div className='o-0'>{index + '→'}</div>);

export const Line = ({lineValue}) => {
  if (lineValue === 0) {
    return <GrayedLine/>;
  } else if (lineValue % 2 === 0) {
    return <OpenLine/>;
  } else {
    return <ClosedLine/>;
  }
}

export const Result = ({hexagram, number, pageNumber, changedLines}) => {
  if(!hexagram) return null;
  return (
    <div className='f1 sans-serif tc'>
      <div>
        {hexagram.glyph}
      </div>
      <div className='mv3'>
        {hexagram.kanji}
      </div>
      <div className='f5 b'>
        <span>{hexagram.bookChinese}</span>
        <span>{' / '}</span>
        <span> {hexagram.bookName}</span>
      </div>
    
      <div className='flex flex-row tc justify-center f6 mt2'>
        <div className='mr2'>
          {number ? `#${number}` : ''}
        </div>
        <div className='o-70'>
          {pageNumber ? `p.(${pageNumber})` : ''}
        </div>
      </div>
      <HumanReadableChangingLines changedLines={changedLines} />
    </div>
  )
}

export const Elements = ({isFirst, upperTrigram, lowerTrigram}) => (
  <div className={`tc flex flex-column ${isFirst ? 'pr2' : 'pl2'}  pt1`}>
    <div className='pb2'>
      <div className='o-0'>{'____'}</div>
      <div className={`${upperTrigram ? '' : 'o-0'}`}>
        {upperTrigram ? upperTrigram.element : '___'}
      </div>
      <div className='o-0'>
        {'____'}
      </div>
    </div>
    <div className='pb2'>
      <div className='o-0'>{'____'}</div>
      <div className={`${lowerTrigram ? '' : 'o-0'}`}>
        {lowerTrigram ? lowerTrigram.element : '___'}
      </div>
      <div className='o-0'>{'____'}</div>
    </div>
  </div>
)

export const AllLines = ({upperLines, lowerLines}) => (
  <div className='w3'>
    <div className='pb2'>
      {upperLines.map((lineValue, i) => (
        <Line key={'upper-line-'+i} lineValue={lineValue}/>
      ))}
    </div>
    <div className='pb2'>
      {lowerLines.map((lineValue, i) => (
        <Line key={'lower-lines-'+i} lineValue={lineValue}/>
      ))}
    </div>
  </div>
)

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

export const HumanReadableChangingLines = ({changedLines}) => {

  if(!changedLines) return <div/>;
  return (
    <div className='f6 mv3 sans-serif flex flex-column tc'>
      {changedLines.map((changedLine, i) => {
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

        return <div key={'human-readable-lines-'+i} className='mt1'>{lineString}</div> 
      })}
    </div>
  )
}

export const FirstHexagram = (dispatch, actions, model) => {

  const hexagram = calculateHexagram(model.lines);

  const changedLines = model.lines.slice().reverse().map((lineValue, i) => lineValue === 6 || lineValue === 9 ? i + 1 : -1).filter(l=> l>=0 );

  return (
    <div className='flex flex-column'>
      <div className='flex flex-row tc justify-center'>
        <Elements
          isFirst={true}
          upperTrigram={hexagram.upperTrigram}
          lowerTrigram={hexagram.lowerTrigram} />
        <AllLines
          upperLines={hexagram.upperLines}
          lowerLines={hexagram.lowerLines}
        />
      </div>
      <Result hexagram={hexagrams[hexagram.n-1]} number={hexagram.n} pageNumber={hexagram.pageNumber} changedLines={changedLines} />
    </div>
  )
}

export const SecondHexagram = (dispatch, actions, model) => {

  const changedLines = changeLinesOfHexagram(model.lines);
  const hexagram = calculateHexagram(changedLines);

  return (
    <div className={`flex flex-column ${isReadingComplete(changedLines, model.lines) ? '' : 'o-20'}`}>
      <div className='flex flex-row tc justify-center'>
        <AllLines upperLines={hexagram.upperLines} lowerLines={hexagram.lowerLines}/>
        <Elements upperTrigram={hexagram.upperTrigram} lowerTrigram={hexagram.lowerTrigram}/>
      </div>
      <Result hexagram={hexagrams[hexagram.n-1]} number={hexagram.n} pageNumber={hexagram.pageNumber}/>
    </div>
  )
}

export const ChangingOrNonChangingLine = ({lineValue, i}) => {
  const index = LINE_NUMBERS - i;
  if (lineValue === 6 || lineValue === 9) {
    return <ChangingArrow index={index}/>
  } else {
    return <NonChangingArrow index={index}/>
  }
}

export const ChangingLines = (dispatch, actions, model) => {

  const changedLines = changeLinesOfHexagram(model.lines);
  const hexagram = calculateHexagram(changedLines);

  return (
    <div className={`ph3 ${isReadingComplete(changedLines, model.lines) ? '' : 'o-20'}`}>
      <div className='pb2'>
        {hexagram.upperLines.map((lineValue, i) => <ChangingOrNonChangingLine key={'upper-lines-'+i} lineValue={lineValue} i={i}/>)}
      </div>
      <div>
        {hexagram.lowerLines.map((lineValue, i) => <ChangingOrNonChangingLine key={'lower-lines-'+i} lineValue={lineValue} i={i + 3}/>)}
      </div>
    </div>
  )
}
 
export const Hexagrams = (dispatch, actions, model) => (
  <div className='flex flex-row w-100 justify-center pt1'>
    {FirstHexagram(dispatch, actions, model)}
    {ChangingLines(dispatch, actions, model)}
    {SecondHexagram(dispatch, actions, model)}
  </div>
)

