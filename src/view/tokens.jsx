import React from "react";
import ReactDOM from "react-dom";

export const Tokens  = ({onChoice, showProbability, selectedValue}) => (
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
        probability = 5;
        break;
      case 8:
        backgroundColor = 'bg-heads white';
        probability = 7;
        break;
      case 9:
        backgroundColor = 'bg-white black b--light-gray';
        probability = 3;
        probabilityDivisor = '';
        break;
    }

    return (
      <div 
        key={"line-value-choice-"+lineValueChoice}
        className="mb2"
      >
        <div 
          className={`f3 pa2 ma2 pointer tc br4 h3 w3 flex flex-row justify-center items-center sans-serif shadow-4 
          ${backgroundColor} ${selectedValue === lineValueChoice ? 'bw2 b--solid b--yellow' : ''}`}
          onClick={() => onChoice(lineValueChoice)}>
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
