export const subscriptions = dispatch => effect => {
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

};