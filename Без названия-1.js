//const body = document.body; // Переменная body присваивается к открытому документу
//const url = window.location.toString(); // Переменная url - это адрес, который написан в адресной строке
//const date = new Date(); // Переменная дата, которая объявляет настоящее время
//const loader = document.getElementById('loader'); // Переменная loader, которая полчает 
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
//  .catch(err => alert('Информация о пользователе не доступна'));