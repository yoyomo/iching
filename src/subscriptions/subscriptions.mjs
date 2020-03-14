import {chooseCurrentCoinSide} from '../update/actions.mjs'
import {HEADS_VALUE, TAILS_VALUE } from '../update/update.mjs';

export const subscriptions = dispatch => {
  
  document.body.addEventListener('keypress', e => {
    if(e.key === 'h' || e.key === ''+HEADS_VALUE){
      dispatch(chooseCurrentCoinSide(HEADS_VALUE));
    } else if (e.key === 't' || e.key === ''+TAILS_VALUE) {
      dispatch(chooseCurrentCoinSide(TAILS_VALUE));
    }
  })

  return effect => {
    switch (effect.type) {
      case "ajax-request":
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080", true);

        xhr.onload = () => {
          dispatch(completeRequest(xhr));
        };

        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send({});
        break;
    }
  }

};
