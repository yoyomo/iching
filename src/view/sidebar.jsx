import React from "react";
import ReactDOM from "react-dom";

import {HamburgerSVG} from '../assets/svgs.jsx';
import circle_i_ching from '../assets/img/circle_i_ching.png';

export const Sidebar = (dispatch, actions, model) => (
  <div>
    {model.toggles.isShowingSidebar ? 
      <div className='flex flex-column'>
        <img src={circle_i_ching} className='w3 h3 o-70'/>
      </div>
      :
      <div className='absolute pointer w2 h2 fill-tool-button' onClick={() => dispatch(actions.toggle('isShowingSidebar'))}>
        <HamburgerSVG />
      </div>
    }
  </div>
)

