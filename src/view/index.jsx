import React from "react";
import ReactDOM from "react-dom";

import { Hexagrams, isReadingComplete } from './hexagrams.jsx'
import { ThrowCoins } from './throw-coins.jsx';
import { EditCoins } from './edit-coins.jsx';
import { Sidebar } from './sidebar.jsx';
import {Rules, Title} from './rules.jsx';

export default (dispatch, actions, model ) => (
  <div className="flex flex-row">
    {Sidebar(dispatch, actions, model)}
    <div className="w-100">
      <div className='min-vh-100 db'>
        {Title(dispatch,actions,model)}
        {Hexagrams(dispatch, actions, model)}
        { !isReadingComplete(model.lines) && (
          <div className='flex flex-column'>
            {ThrowCoins(dispatch, actions, model)}
            {model.toggles.isShowingRules && Rules(dispatch,actions,model) }
          </div>
        )}
      </div>
      {EditCoins(dispatch, actions, model)}
    </div>
  </div>
)
