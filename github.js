let input = document.getElementById("search");

input.addEventListener("keyup", e => {
    let searchText = e.target.value;
    getGitHubProfile(searchText);
});

async function getGitHubProfile(searchText) {
    let Client_Id = "cceed1ae707d5173f3fd";
    let Client_Secret = "782eb74fee3d5a48f9f5520c4897642da07a8219";

    let githubUrl = `
    https://api.github.com/users/${searchText}?client_id=${Client_Id}&client_secret=${Client_Secret}`;

    let res = await window.fetch(githubUrl).catch(err => console.log(err));
    let Data = await res.json().catch(err => console.log(err));
     console.log(Data)

    document.getElementById('template').innerHTML = `
     <div class="container">
     <div class="row">
     <div class = "col-md-3">
     <img src ="${Data.avatar_url}"/>
     <h1 class = "display-4 font-weight-weight-bold">${Data.login}</h1>
     </div>
     <div class="col-md-9"></div>
     </div>
     </div>
    `


}