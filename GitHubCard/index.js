import axios from 'axios';

console.log(axios);

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const cardsDiv = document.querySelector('.cards');

axios.get('https://api.github.com/users/JoeyMBrown')
  .then(res => {
    cardsDiv.appendChild(createCard(res.data));
    console.log(res.data);
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['mollybee', 'dannyrb', 'gillijar', 'byang32', 'Kenttleton'];

followersArray.forEach((item) => {
  axios.get(`https://api.github.com/users/${item}`)
    .then(res => {
      cardsDiv.appendChild(createCard(res.data));
    })
    .catch(error => {
      console.log(error);
    })
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard(data) {
  const div = document.createElement('div');
  div.classList.add('card');

  const img = document.createElement('img');
  img.setAttribute("src", `${data.avatar_url}`);

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('card-info');

  const h3 = document.createElement('h3');
  h3.classList.add('name');
  h3.textContent = data.name;

  const pUser = document.createElement('p');
  pUser.classList.add('username');
  pUser.textContent = data.login;

  const pLocation = document.createElement('p');
  pLocation.textContent = `Location: ${data.location}`;

  const pProfile = document.createElement('p');
  pProfile.textContent = 'Profile: ';

  const profileLink = document.createElement('a');
  profileLink.setAttribute("href", `${data.html_url}`);
  profileLink.textContent = `${data.html_url}`;

  const pFollowers = document.createElement('p');
  pFollowers.textContent = `Followers: ${data.followers}`;

  const pFollowing = document.createElement('p');
  pFollowing.textContent = `Following: ${data.following}`;

  const pBio = document.createElement('p');
  pBio.textContent = `Bio: ${data.bio}`;

  const infoDivChildren = [h3, pUser, pLocation, pProfile, pFollowers, pFollowing, pBio];

  infoDivChildren.forEach((item) => { infoDiv.appendChild(item); });

  div.appendChild(img);
  div.appendChild(infoDiv);
  pProfile.appendChild(profileLink);

  return div;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
