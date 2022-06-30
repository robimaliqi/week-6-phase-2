const got = require('got');

function fetchJson(response) {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
}

function fetchRepositoryInfo(repo, callback) {
  got(`https://api.github.com/repos/${repo}`).then(callback);
}

fetchRepositoryInfo('amfibiya17/first_week_js', fetchJson);