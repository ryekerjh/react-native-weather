const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText)
    error.response = response;
    throw error;
  }
};

const parseJSON = (response) => response.json();

export const get = (url) => (
  fetch(url, { headers })
  .then(checkStatus)
  .then(parseJSON)
);

export const post = (url, data) => (
  fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
  .then(checkStatus)
  .then(parseJSON)
);