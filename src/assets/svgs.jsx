import React from "react";
import ReactDOM from "react-dom";

export const HamburgerSVG = ({width, height}) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={width} height={height}>

    <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
  </svg>
)

export const CloseSVG = ({width, height}) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306 306" width={width} height={height}>
    <polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153"/>
  </svg>
)
