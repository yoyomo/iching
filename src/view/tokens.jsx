import React from "react";
import ReactDOM from "react-dom";

export const Tokens  = ({onChoice, showProbability, selectedValue, method}) => (
  [6,7,8,9].map(lineValueChoice => {
    let backgroundColor = '';
    let probability = 0;
    let probabilityDivisor = ':';

    switch(lineValueChoice) {
      case 6:
        backgroundColor = 'bg-black white';
        probability = 1;
        break;
      case 7:
        backgroundColor = 'bg-tails white';
        if(method.indexOf('yarrow') !== -1){
          probability = 5;
        } else {
          probability = 3;
        }
        break;
      case 8:
        backgroundColor = 'bg-heads white';
        if(method.indexOf('yarrow') !== -1){
          probability = 7;
        } else {
          probability = 3;
        }
        break;
      case 9:
        backgroundColor = 'bg-white black b--light-gray';
        if(method.indexOf('yarrow') !== -1){
          probability = 3;
        } else {
          probability = 1;
        }
        probabilityDivisor = '';
        break;
    }
    let buttonClass = 'pointer shadow-4';
    if(!onChoice) {
      backgroundColor = '';
      buttonClass = 'ba b--light-gray gray'
    }

    return (
      <div 
        key={"line-value-choice-"+lineValueChoice}
        className="mb2"
      >
        <div 
          className={`f3 pa2 ma2 tc br4 h3 w3 flex flex-row justify-center items-center sans-serif ${buttonClass}
          ${backgroundColor} ${selectedValue === lineValueChoice ? 'bw2 b--solid b--yellow' : ''}`}
          onClick={() => onChoice && onChoice(lineValueChoice)}>
          {lineValueChoice}
        </div>
        { showProbability && (
          <div className="tc justify-center relative w-100">
            <div className="di tc">
              {probability}
            </div>
            <div className="di fr">
              {probabilityDivisor}
            </div>
          </div>
        )}
      </div>
    )})
)
