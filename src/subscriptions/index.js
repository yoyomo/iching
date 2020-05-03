export default {

  listenToKeyboard: () => (dispatch, actions) => {

    document.body.addEventListener('keypress', e => {
      if(e.key === 'h'){
        dispatch(actions.chooseCurrentCoinSide("heads"));
      } else if (e.key === 't') {
        dispatch(actions.chooseCurrentCoinSide('tails'));
      } 
      else if(e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9') {
        dispatch(actions.chooseCurrentLineTotal(parseInt(e.key)))
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
