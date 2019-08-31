let body = document.body;
let url = window.location.toString();
let now = new Date();
let log = console.log;

const getDate = new Promise((resolve, reject) => {
    setTimeout(() => now ? resolve(now) : reject('Date not set'), 2000)
});
    getDate
        .then(now => log(now))
        .catch(err => log(err))


//let getName = (url) => {
//    let urlSplit = url.split('=');
//    let username = urlSplit[1];
//    if (username == undefined) {
//        username = 'SveSvet'
//    }
//    return username;
//};
//
//let name = getName(url);
//
//fetch('https://api.github.com/users/' + name)
// .then(res => res.json())
// .then(json => {
//          avatar = json.avatar_url;
//    userName = json.name;
//    description = json.bio;
//    url = json.url;
//    let createName = () => {
//      let userName = document.createElement('h1');
//      userName.innerHTML = name;
//      body.appendChild(userName);
//    }
//    let createDescription = () => {
//      let userDescription = document.createElement('h3');
//      userDescription.innerHTML = description;
//      body.appendChild(userDescription);
//    }
//    let createAvatar = () => {
//      let userAvatar = document.createElement('img');
//      let newString = document.createElement('br');
//      userAvatar.src = avatar;
//      body.appendChild(userAvatar);
//      body.appendChild(newString);
//    }
//    let createUrl = () => {
//      let userUrl = document.createElement('a');
//      let text = document.createTextNode('profile');
//      userUrl.appendChild(text);
//      userUrl.href = 'https://github.com/' + name;
//      body.appendChild(userUrl);
//    }
//    createName();
//    createDescription();
//    createAvatar();
//    createUrl();
//  })
//.catch(err => alert('Нет инфы!'))

//const body = document.body;
//const url = window.location.toString();
//const date = new Date();
//const loader = document.getElementById('loader');
//let requestFromPromise, dateFromPromise;
//const cleanLoader = () => {
//	loader.style.display = 'none';
//}
//
//const getUsernameFromUrl = (url) => {
//    let splitOfUrl = url.split('=');
//  let stringOfUsername  = splitOfUrl[1];
//  if (stringOfUsername == undefined) {
//    stringOfUsername = 'SveSvet';
//  }
//  return stringOfUsername;
//}
//const getDate = new Promise((resolve, reject) =>
//  setTimeout(() => date ? resolve(date) : reject('Время неизвестно'), 2000)
//);
//const getRequest = fetch(`https://api.github.com/users/${getUsernameFromUrl(url)}`);
//Promise.all([getRequest, getDate])
//  .then(([request, date]) => {
//    requestFromPromise = request;
//    dateFromPromise = date;
//  })
//  .then(res => requestFromPromise.json())
//  .then(user => {
//    avatarOfUser = user.avatar_url;
//    bioOfUser = user.bio;
//    urlOfUser = user.url;
//    const addUser = () => {
//      const user = document.createElement('h1');
//      user.innerHTML = `${getUsernameFromUrl(url)}`;
//      body.appendChild(user);
//    }
//    const addBio = () => {
//      const bio = document.createElement('p');
//      bio.innerHTML = `${bioOfUser}`;
//      body.appendChild(bio);
//    }
//    const addImg = () => {
//      const img = document.createElement('img');
//      img.src = this.avatarOfUser;
//      body.appendChild(img);
//    }
//    addUser();
//    addBio();
//    addImg();
//  })
//  .then(res => {
//    const date = document.createElement('p');
//    date.innerHTML = `${dateFromPromise}`;
//    body.appendChild(date);
//    cleanLoader();
//  })
//  .catch(err => alert('Информация о пользователе недоступна'));