const BASE_URL = 'https://thinkful-list-api.herokuapp.com/tyler/bookmarks';

function apiFetch(...args) {
  let error;
  return fetch(...args)
    .then(response=>  {
      // Check if response is an error
      if (!response.ok) {
        // If the server returns an error build an error object
        error = {code: response.status};
        // Check response from headers
        if (!response.headers.get('content-type').includes('json')) {
          error.message = response.statusText;
          return Promise.reject(error);
        }
      }
      // Return parsed JSON
      else return response.json();
    })
    .then(responseJSON => {
      if (error) {
        error.message = responseJSON.message;
        return Promise.reject(error);
      }
      return responseJSON;
    });
}

function getData() {
  return apiFetch(`${BASE_URL}`);
}

function postData(bookmark) {
  return apiFetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: bookmark
  });
}

function patchData() {

}

function deleteData() {

}

export default {
  getData,
  postData,
  patchData,
  deleteData
};