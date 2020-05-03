import React from "react";
import ReactDOM from "react-dom";

import { AllCoinOptions } from './coin_options.jsx'
import { LineNumbers } from './line_numbers.jsx'
import { FirstHexagram, SecondHexagram, ChangingLines, isReadingComplete } from './hexagrams.jsx'
import { ThrowCoins } from './throw_coins.jsx';
import { EditCoins } from './edit_coins.jsx';
import {Sidebar} from './sidebar.jsx';
import { Tokens } from './tokens.jsx';

export default (dispatch, actions, model ) => (
  <div className="flex flex-row">
    {Sidebar(dispatch, actions, model)}
    <div className="w-100">
      <div className='min-vh-100 db'>
        <div className='w-100 tc tracked sans-serif'>
          <div className='f1 b pt4 pb3'>
            I-CHING
          </div>
          <div className='f3 b pb4'>
            The Book of Changes
          </div>
          { model.toggles.isShowingRules && (
            <div className='serif f5 o-70'>
              <div >
                Iching only requires you to roll 3 coins, 6 times.
              </div>
              <div>
                <span>
                  {'And have an '}
                </span>
                <a href='https://www.amazon.com/dp/1250209056/ref=cm_sw_em_r_mt_dp_U_0EUDEbR4Q423X' alt='978-1250209054' target='_blank'>
                  {'Iching book'}
                </a>
                <span>{' ready.'}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className='flex flex-row w-100 justify-center pt1'>
          {FirstHexagram(dispatch, actions, model)}
          {ChangingLines(dispatch, actions, model)}
          {SecondHexagram(dispatch, actions, model)}
        </div>
        { !isReadingComplete(model.lines) && (
          <div className='flex flex-column'>
            {ThrowCoins(dispatch, actions, model)}
            {model.toggles.isShowingRules &&
              <>
                <div className='serif f5 o-70 tc'>
                  <div>
                    Throw physical coins. Then click according to (h)eads and (t)ails,
                  </div>
                  <div className='0-90 f6'>
                    type h or 3 for heads, and t or 2 for tails or,
                  </div>
                  <div className='o-90 f6'>
                    type 6, 7, 8, or 9 for each line
                  </div>
                  <br/>
                  {model.method !== 'yarrow-sixteen-tokens' && (
                    <div>
                      Probabilities:
                    </div>
                  )}
                </div>
                {model.method !== 'yarrow-sixteen-tokens' && (
                  <div className='flex flex-row justify-center flex-wrap'>
                    <Tokens showProbability={true} method={model.method}/>
                  </div>
                )}
              </>
            }
          </div>
        )}
      </div>
      {EditCoins(dispatch, actions, model)}
    </div>
  </div>
)
