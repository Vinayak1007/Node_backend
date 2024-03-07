const express = require('express');
require('dotenv').config();
const app = express();

const githubData = {
    "login": "Vinayak1007",
    "id": 143384814,
    "node_id": "U_kgDOCIvg7g",
    "avatar_url": "https://avatars.githubusercontent.com/u/143384814?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Vinayak1007",
    "html_url": "https://github.com/Vinayak1007",
    "followers_url": "https://api.github.com/users/Vinayak1007/followers",
    "following_url": "https://api.github.com/users/Vinayak1007/following{/other_user}",
    "gists_url": "https://api.github.com/users/Vinayak1007/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Vinayak1007/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Vinayak1007/subscriptions",
    "organizations_url": "https://api.github.com/users/Vinayak1007/orgs",
    "repos_url": "https://api.github.com/users/Vinayak1007/repos",
    "events_url": "https://api.github.com/users/Vinayak1007/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Vinayak1007/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-08-28T07:03:32Z",
    "updated_at": "2024-02-20T04:29:27Z"
  }

app.get('/',(req,res)  =>{
    res.send('Welcome to the world of Backend ');
});

app.get('/about',(req,res)  => {
    res.send('Why do you want to know about me (BOLO BOLO KYA BAAAT HAIII ............)');
});

app.get('/contact',(req, res)  => {
    res.send('Contact me at :-  Nhi batayenge hum ');
});

app.get('/github',(req,res)=> {
    res.json(githubData);
});

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
});