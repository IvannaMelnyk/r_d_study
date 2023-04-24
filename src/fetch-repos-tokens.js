const GITHUB_URL_BASE = 'https://api.github.com';
const GITHUB_USER = 'IvannaMelnyk';
//GITHUB_TOKEN hide in token folder
class GithubApi {
  constructor(token, username) {
    this.token = token;
    this.username = username;
  }

  async getRepos() {
    const url = `${GITHUB_URL_BASE}/users/${this.username}/repos?q=created:">2022-09-30"&sort=stars&order=desc&per_page=15`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Token ${this.token}`
      }
    });
    const data = await response.json();
    return data;
  }
}

const repos = document.querySelector(".project-list");
const loader = document.querySelector(".loader");

function createElement(data) {
  const repo = document.createElement("tr");
  repo.classList.add("project");

  const link = document.createElement("a");
  link.textContent = data.full_name;
  link.setAttribute("href", data.html_url);
  link.setAttribute("target", "_blank");

  repo.appendChild(link);

  if (data.description) {
    const desc = document.createElement("td");
    desc.textContent = data.description;
    repo.appendChild(desc);
  }

  repos.appendChild(repo);
}

async function fetchAllAsync() {
  const githubApi = new GithubApi(GITHUB_TOKEN, GITHUB_USER);
  const data = await githubApi.getRepos();
  if (!data.length) {
    return;
  }
  loader.remove();

  data.forEach(project => {
    createElement(project);
  });
}

fetchAllAsync();
