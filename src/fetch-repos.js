const url = `https://api.github.com/users/IvannaMelnyk/repos?q=created:">2022-09-30"&sort=stars&order=desc&per_page=15`
const repos = document.querySelector(".project-list")
const loader = document.querySelector(".loader")

function createElement(data) {
    const repo = document.createElement("tr")
    repo.classList.add("project")

    const link = document.createElement("a")
    link.textContent = data.full_name
    link.setAttribute("href", data.html_url)
    link.setAttribute("target", "_blank")

    repo.appendChild(link)

    if (data.description) {
        const desc = document.createElement("td")
        desc.textContent = data.description
        
        repo.appendChild(desc)
    }

    repos.appendChild(repo)
}

async function fetchAllAsync() {
    const allProjects = await fetch(url)
    const data = await allProjects.json()
    if (!data.length) {
        return
    }
    loader.remove()

        data.forEach(project => {
        createElement(project)
        })
}

fetchAllAsync()

