import {div, img} from 'muvjs/muv-dom';
import {HamburgerSVG} from '../assets/svgs.mjs';
import {toggle} from '../update/actions.mjs';

export const Sidebar = dispatch => model => {

  return (
    div()([
      , model.toggles.isShowingSidebar ? 
      div({class: 'flex flex-column'})([
        , 'AAHHH'
        , img({src: 'img/circle_i_ching.png', class: 'w1 h1 o-70'})()
      ]) : null
      , !model.toggles.isShowingSidebar ?
      div({class: 'absolute pointer', onclick: (() => dispatch(toggle('isShowingSidebar')))})(
        HamburgerSVG()()
      ) : null

    ])
  )
}
