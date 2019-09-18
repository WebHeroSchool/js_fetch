let body = document.body;
let url = window.location.toString();
let date = new Date();

function hello() {
	setTimeout(function() {
  let preloader = document.getElementById('preloader');
  let loader = document.getElementById('loader');
  if( !preloader.classList.contains('done') )
  {
  	preloader.classList.add('done');
    loader.classList.add('done');
  }
<<<<<<< HEAD
  }, 1000);
}

=======
  }, 2000);
}

hello();

>>>>>>> b2100dc6bceadb0ffa45bee7f7c2a15ca693c7eb
let getUsername = (url) => {
    let splitOfUrl = url.split('=');
    let getMyUsername = splitOfUrl[1];
    if (getMyUsername == undefined) {
        getMyUsername = 'SveSvet';
    }
    return getMyUsername;
}

<<<<<<< HEAD
let getUsernameFromPromise = new Promise((resolve, reject) => {
    setTimeout(() => getUsername ? resolve(getUsername) : reject("name not found"), 3000)
})

=======
>>>>>>> b2100dc6bceadb0ffa45bee7f7c2a15ca693c7eb
let getDate = new Promise((resolve, reject) => setTimeout(() => date ? resolve(date) : reject('Date is not defined'), 2000)
);

let getRequest = fetch(`https://api.github.com/users/${getUsername(url)}`);
Promise.all([getRequest, getDate])
    .then(([request, date]) => {
    requestForPromise = request;
    dateForPromice = date;
})
    .then(res => requestForPromise.json())
    .then(user => {
    userAvatar = user.avatar_url;
    userBio = user.bio;
    userUrl = user.url;
    
    let addUsername = () => {
        let user = document.createElement('h1');
        user.innerHTML = `${getUsername(url)}`;
        body.appendChild(user);
    }
    
    let addBio = () => {
        const bio = document.createElement('p');
        bio.innerHTML = `${userBio}`;
        body.appendChild(bio);
    }
    
    let addAvatar = () => {
        const avatar = document.createElement('img');
        avatar.src = this.userAvatar;
        body.appendChild(avatar);
    }
    addUsername();
    addBio();
    addAvatar();
})
.then(res => {
    const date = document.createElement('h2');
<<<<<<< HEAD
    date.innerHTML = `${dateForPromice}`;
    body.appendChild(date);
    hello();
})
.catch(err => console.log('Page is not defined :c'));
=======
    date.innerHTML = `${dateForPromise}`;
    body.appendChild(date);
    hello();
})
.catch(err => console.log('Page is not defined :c'));

>>>>>>> b2100dc6bceadb0ffa45bee7f7c2a15ca693c7eb
