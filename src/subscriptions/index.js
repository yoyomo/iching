import {HEADS_VALUE, TAILS_VALUE } from '../update';

export default {

  listenToKeyboard: () => (dispatch, actions) => {

    document.body.addEventListener('keypress', e => {
      if(e.key === 'h' || e.key === ''+HEADS_VALUE){
        dispatch(actions.chooseCurrentCoinSide(HEADS_VALUE));
      } else if (e.key === 't' || e.key === ''+TAILS_VALUE) {
        dispatch(actions.chooseCurrentCoinSide(TAILS_VALUE));
      } 
      else if(e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9') {
        dispatch(actions.chooseCurrentCoinTotal(parseInt(e.key)))
      }
    })
  },

  makeRequest: () => (dispatch, actions) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080", true);

    xhr.onload = () => {
      dispatch(actions.completeRequest(xhr));
    };

    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send({});
    return;
  },
  reloadPage: () => (dispatch, actions) => {
    location.reload();
    return;
  }
}
