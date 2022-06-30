const got = require('got');

function fetchJson(response) {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
}

got('https://jsonplaceholder.typicode.com/todos').then(fetchJson);
