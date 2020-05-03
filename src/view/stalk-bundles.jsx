import React from "react";
import ReactDOM from "react-dom";

import { times } from '../utils/arrays.mjs';

export const StalkBundles = ({onChoice, bundles}) => {
  return (
    [[9,5],[8,4],[8,4]].map((choices, coinIndex) => (
      <div key={"coin-"+coinIndex} className="ma2 flex flex-row">
        {choices.map(choice => {
          let backgroundColor = '';
          let side = '';
          let value = 0;

          switch(choice) {
            case 9:
            case 8:
              backgroundColor = 'bg-tails white';
              side = 'tails';
              value = 2;
              break;
            case 5:
            case 4:
              backgroundColor = 'bg-heads white';
              side = 'heads';
              value = 3;
              break;
          }

          return (
            <div 
              key={"choice-"+choice}
              className={`f3 pa2 ma2 tc br4 h3 w3 flex flex-row justify-center items-center sans-serif pointer shadow-4 
          ${backgroundColor} ${bundles[coinIndex] === value ? 'bw2 b--solid b--yellow' : ''}`}
              onClick={() => onChoice(coinIndex, side)}
            >
              {choice}
            </div>
          )
        }
        )}
      </div>
    )
    )
  )
}
