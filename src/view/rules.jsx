import React from "react";
import ReactDOM from "react-dom";

import {Tokens} from './tokens.jsx';

export const TitleExplanations = (method) => {
  switch(method) {
    case 'three-coins':
      return 'Iching only requires you to roll 3 coins, 6 times.'
    case 'yarrow-two-coins':
      return 'Iching only requires you to roll 2 coins, 12 times.'
    case 'yarrow-sixteen-tokens':
      return 'Iching only requires you to pick one of 16 tokens, 6 times.'
    case 'yarrow-stalk':
      return 'Iching only requires you to have 50 stalks.';
    default:
      return;
  }
}

export const DetailedExplanations = (method) => {

  switch(method){
    case 'three-coins':
      return 'Throw 3 physical coins. Then click according to (h)eads and (t)ails or,';
    case 'yarrow-two-coins':
      return 'Throw 2 physical coins. Then click according to (h)eads and (t)ails or,';
    case 'yarrow-sixteen-tokens':
      return 'Shuffle tokens and choose from the pile of sixteen (with 4 different colors of 1,5,7,3). Then click according to 6, 7, 8, 9 or,';
    case 'yarrow-stalk':
      return 'Remove 1 stalk from the pile and divide the pile in two (L & R). From the right (R) pile, take 1 stalk and hold it with your left hand. From the left (L) pile, remove stalks 4 at a time, creating a new pile C, until you reach 4 or less stalks; hold these in your left hand. From the right (R) pile remove stalks 4 at a time, adding them to pile C, until you reach 4 or less; hold these last in your left hand. Your left hand now holds the first token (9 or 5). Repeat the process starting with the pile C until you reach the second, and eventually third token (8 or 4). Or,';
    default:
      return
  }

}

export const Block = ({children}) => (
  <div className="dib bg-light-gray br1 ma1 pa1">
    {children}
  </div>
)

export const Title = (dispatch, actions, model) => (
  <div className='w-100 tc tracked sans-serif'>
    <div className='f1 b pt4 pb3'>
      I-CHING
    </div>
    <div className='f3 b pb4'>
      The Book of Changes
    </div>
    { model.toggles.isShowingRules && (
      <div className='serif f5 o-70'>
        <div>
          {TitleExplanations(model.method)}
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
)

export const Rules = (dispatch, actions, model) => (
  <>
    <div className='serif f5 o-70 tc'>
      <div className="pa2">
        {DetailedExplanations(model.method)}
      </div>
      {model.method !== 'yarrow-sixteen-tokens' && (
        <div className='0-90 f6'>
          type <Block>h</Block> for heads{model.method === 'yarrow-stalk' ? '(5 or 4)' : ''}, and <Block>t</Block> for tails{model.method === 'yarrow-stalk' ? '(9 or 8)' : ''} or,
        </div>
      )}
      <div className='o-90 f6'>
        type <Block>6</Block>, <Block>7</Block>, <Block>8</Block>, or <Block>9</Block> for each line
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
)

