import React from "react";
import ReactDOM from "react-dom";

import {HamburgerSVG, CloseSVG} from '../assets/svgs.jsx';
import bagua from '../assets/img/bagua.png';
import {Methods} from '../model';

export const Sidebar = (dispatch, actions, model) => (
  <div className="flex flex-row">
    {model.toggles.isShowingSidebar && ( 
      <div className='flex flex-column bg-light-gray h-100'>
        {Methods.map(method => (
          <div key={'method-' + method.name}
            className={`${method.name === model.method ? 'bg-heads white' : ''} pa2 pointer`}
            onClick={() => dispatch(actions.changeMethod(method.name))}
          >
            {method.label}
          </div>
        ))}
        <img src={bagua} className='absolute bottom-0 pa3 w3 h3 o-70'/>
      </div>
    )}
    <div>
      <div className='absolute pointer pa2 fill-tool-button' onClick={() => dispatch(actions.toggle('isShowingSidebar'))}>
        {model.toggles.isShowingSidebar ?
          <CloseSVG width={24} height={24}/>
          :
          <HamburgerSVG width={32} height={32}/>
        }
      </div>
    </div>
  </div>
)

