const APIURL = "https://api.github.com/users/";
const SEARCH_APIURL = "https://api.github.com/search/users?q=";
const main = document.querySelector("#main");
const searchBox = document.querySelector("#search");

const getUser = async (username) => {
    try {
        const response = await fetch(APIURL + username);
        const data = await response.json();
        if (data.message === "Not Found") {
            main.innerHTML = "<h2>User not found</h2>";
            return;
        }
        const card = `
            <div class="card">
                <div>
                    <img class="avatar" src="${data.avatar_url}">
                </div>
                <div class="user-info">
                    <h2>${data.name}</h2>
                    <p>${data.bio}</p>
                    <ul class="info">
                        <li>${data.followers}<strong>Followers</strong></li>
                        <li>${data.following}<strong>Following</strong></li>
                        <li>${data.public_repos}<strong>Repos</strong></li>
                    </ul>
                    <div id="repos"></div>
                </div>
            </div>
        `;
        main.innerHTML = card;
        getRepos(username);
    } catch (error) {
        main.innerHTML = `<h2>Error fetching user data</h2>`;
    }
};

const getRepos = async (username) => {
    try {
        const repos = document.querySelector("#repos");
        const response = await fetch(APIURL + username + "/repos");
        const data = await response.json();
        data.forEach((item) => {
            const elem = document.createElement("a");
            elem.classList.add("repo");
            elem.href = item.html_url;
            elem.innerText = item.name;
            elem.target = "_blank";
            repos.appendChild(elem);
        });
    } catch (error) {
        console.error("Error fetching repos:", error);
    }
};

const searchUser = async (query) => {
    try {
        const response = await fetch(SEARCH_APIURL + query + "+in:login,name");
        const data = await response.json();
        if (data.total_count === 0) {
            main.innerHTML = "<h2>User not found</h2>";
            return;
        }
        const username = data.items[0].login;
        getUser(username);
    } catch (error) {
        main.innerHTML = `<h2>Error searching user</h2>`;
    }
};

const formSubmit = () => {
    if (searchBox.value !== "") {
        searchUser(searchBox.value);
        searchBox.value = "";
    }
    return false;
};

searchBox.addEventListener("focusout", function () {
    formSubmit();
});

// Optional: Display a default user initially
getUser("octocat");
