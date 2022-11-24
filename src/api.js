const sidebarContent = document.querySelector(".sidebarContent");

// created a span tag and name it gitHubUsername also append it to sidebarContent
const gitHubUsername = document.createElement('span')
gitHubUsername.className = 'gitHubUsername';
sidebarContent.appendChild(gitHubUsername);

const gitbio = document.createElement('span')
gitbio.className = 'bio';
sidebarContent.appendChild(gitbio);

const socialIcon = document.createElement("div");
socialIcon.className = "socialIcon";
sidebarContent.appendChild(socialIcon)

const twitter = document.createElement('span')
const twitterIcon = document.createElement('i');
const link = document.createElement('a')
link.innerHTML = "@samuel_Dev_";
link.href = "https://twitter.com/Samuel_Dev_"
twitterIcon.className = "fa-brands fa-twitter";
socialIcon.appendChild(twitter);
twitter.appendChild(twitterIcon)
twitter.appendChild(link)

const youtube = document.createElement('span')
const youtubeIcon = document.createElement('i');
const youtubelink = document.createElement('a')
youtubelink.innerHTML = "DamDev";
youtubelink.href = "https://twitter.com/Samuel_Dev_"
youtubeIcon.className = "fa-brands fa-youtube";
socialIcon.appendChild(youtube);
youtube.appendChild(youtubeIcon)
youtube.appendChild(youtubelink)

// fetching github url
fetch('https://api.github.com/users/DamDev1', {
  headers: new Headers({
    'User-agent': 'Mozilla/4.0 Custom User Agent'
  })
})
.then(response => response.json())
.then(data => {
  gitHubUsername.innerHTML ="@" + data.login;
  gitbio.innerHTML = data.bio;
})
.catch(error => console.error(error))