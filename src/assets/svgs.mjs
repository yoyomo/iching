import {svg, path} from 'muvjs/muv-dom';

export const HamburgerSVG = (props = {}) => children => {
  const width = props.width || 16;
  const height = props.height || 16;
  return (
    svg({version:"1.1",xmlns:"http://www.w3.org/2000/svg", viewBox:"0 0 32 32", width: `${width}px`,height:`${height}px`})([
      , path({d:"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"})()
    ])
  )
}
